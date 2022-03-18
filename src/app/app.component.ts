import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    SurfcampLoginResponseI,
    SurfcampLoginTokenResponseI,
} from './interfaces/surfcamps.interfaces';
import { AuthService } from './services/auth.service';
import { login } from './state/auth/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'surftrip-front';
    token: string | null;

    constructor(
        private store: Store<{ auth: SurfcampLoginResponseI }>,
        public authService: AuthService
    ) {
        this.token = null;
    }

    ngOnInit(): void {
        this.token = localStorage.getItem('token');
        this.store
            .select((store) => {
                return store.auth;
            })
            .subscribe((auth) => {
                console.log(auth);
            });
        console.log(this.token);
        if (this.token) {
            this.authService
                .loginToken(this.token)
                .subscribe((resp: SurfcampLoginTokenResponseI) => {
                    console.log(resp);
                    this.store.dispatch(
                        login({
                            loginResponse: {
                                ...resp,
                                token: this.token as string,
                            },
                        })
                    );
                });
        }
    }
}
