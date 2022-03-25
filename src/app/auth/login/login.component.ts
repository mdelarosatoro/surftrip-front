import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { UsersService } from 'src/app/services/users.service';
import { loadSurfcamp } from 'src/app/state/surfcamp/surfcamp.actions';
import { loadUser } from 'src/app/state/user/user.actions';
import { SurfcampLoginResponseI } from '../../interfaces/surfcamps.interfaces';
import { AuthService } from '../../services/auth.service';
import { login } from '../../state/auth/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginSurfcampForm: FormGroup;
    invalidMessage: boolean;

    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        private store: Store<{ auth: SurfcampLoginResponseI }>,
        private router: Router,
        public surfcampsService: SurfcampsService,
        public usersService: UsersService
    ) {
        this.loginSurfcampForm = fb.group({
            userType: ['surfer', []],
            username: ['', []],
            password: ['', []],
        });
        this.invalidMessage = false;
    }

    ngOnInit(): void {
        this.store
            .select((store) => {
                return store.auth;
            })
            .subscribe((auth) => {});
    }

    handleSubmit(): void {
        const credentials = {
            username: this.loginSurfcampForm.value.username,
            password: this.loginSurfcampForm.value.password,
        };
        if (this.loginSurfcampForm.value.userType === 'surfcamp') {
            this.authService.loginSurfcamp(credentials).subscribe({
                next: (resp) => {
                    if (resp.token) {
                        localStorage.setItem('token', resp.token);
                        this.store.dispatch(login({ loginResponse: resp }));
                        this.surfcampsService
                            .getSurfcampById(resp.token as string, resp.id)
                            .subscribe((resp) => {
                                this.store.dispatch(
                                    loadSurfcamp({
                                        surfcamp: resp,
                                    })
                                );
                            });
                        this.router.navigateByUrl('/surfcamp-dashboard');
                    }
                },
                error: (error) => {
                    this.invalidMessage = true;
                },
            });
        } else if (this.loginSurfcampForm.value.userType === 'surfer') {
            this.authService.loginUser(credentials).subscribe({
                next: (resp) => {
                    if (resp.token) {
                        localStorage.setItem('token', resp.token);
                        this.store.dispatch(login({ loginResponse: resp }));
                        this.usersService
                            .getUserById(resp.token as string, resp.id)
                            .subscribe((resp) => {
                                this.store.dispatch(
                                    loadUser({
                                        user: resp,
                                    })
                                );
                            });
                        this.router.navigateByUrl('/surfer-dashboard');
                    }
                },
                error: (error) => {
                    this.invalidMessage = true;
                },
            });
        }
    }
}
