import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    SurfcampI,
    SurfcampLoginResponseI,
    SurfcampLoginTokenResponseI,
} from './interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from './interfaces/users.interfaces';
import { AuthService } from './services/auth.service';
import { SurfcampsService } from './services/surfcamps.service';
import { login } from './state/auth/auth.actions';
import { loadSurfcamp } from './state/surfcamp/surfcamp.actions';
import { SocketService } from './services/socket.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'surftrip-front';
    token: string | null;
    notification: string;
    notificationState: boolean;

    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        public authService: AuthService,
        public surfcampsService: SurfcampsService,
        public socket: SocketService
    ) {
        this.token = null;
        this.notification = '';
        this.notificationState = false;
    }

    ngOnInit(): void {
        this.token = localStorage.getItem('token');
        this.store
            .select((store) => {
                return store.auth;
            })
            .subscribe((auth) => {});
        if (this.token) {
            this.authService
                .loginToken(this.token)
                .subscribe(
                    (
                        resp: SurfcampLoginTokenResponseI | UserLoginResponseI
                    ) => {
                        this.store.dispatch(
                            login({
                                loginResponse: {
                                    ...resp,
                                    token: this.token as string,
                                },
                            })
                        );
                        if (resp.role === 'surfcamp') {
                            this.surfcampsService
                                .getSurfcampById(this.token as string, resp.id)
                                .subscribe((resp) => {
                                    this.store.dispatch(
                                        loadSurfcamp({
                                            surfcamp: resp,
                                        })
                                    );
                                    this.socket
                                        .getBookingNotification()
                                        .subscribe((socketResp) => {
                                            if (
                                                socketResp.surfcampId ===
                                                resp._id
                                            ) {
                                                this.notification = `Your package ${socketResp.packageId} was booked by User ${socketResp.userId}`;
                                                this.notificationState = true;
                                                setTimeout(() => {
                                                    this.notificationState =
                                                        false;
                                                    this.notification = '';
                                                }, 9000);
                                            }
                                        });
                                });
                        }
                    }
                );
        }
    }
}
