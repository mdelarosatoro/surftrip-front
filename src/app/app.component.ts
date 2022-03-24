import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    SurfcampI,
    SurfcampLoginResponseI,
    SurfcampLoginTokenResponseI,
} from './interfaces/surfcamps.interfaces';
import { AuthService } from './services/auth.service';
import { SurfcampsService } from './services/surfcamps.service';
import { login } from './state/auth/auth.actions';
import { loadSurfcamp } from './state/surfcamp/surfcamp.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'surftrip-front';
    token: string | null;

    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        public authService: AuthService,
        public surfcampsService: SurfcampsService
    ) {
        this.token = null;
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
                .subscribe((resp: SurfcampLoginTokenResponseI) => {
                    this.store.dispatch(
                        login({
                            loginResponse: {
                                ...resp,
                                token: this.token as string,
                            },
                        })
                    );
                    this.surfcampsService
                        .getSurfcampById(this.token as string, resp.id)
                        .subscribe((resp) => {
                            this.store.dispatch(
                                loadSurfcamp({
                                    surfcamp: resp,
                                })
                            );
                        });
                });
        }
    }
}
