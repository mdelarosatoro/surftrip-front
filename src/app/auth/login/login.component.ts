import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { loadSurfcamp } from 'src/app/state/surfcamp/surfcamp.actions';
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
    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        private store: Store<{ auth: SurfcampLoginResponseI }>,
        private router: Router,
        private surfcampsService: SurfcampsService
    ) {
        this.loginSurfcampForm = fb.group({
            userType: ['', []],
            username: ['', []],
            password: ['', []],
        });
    }

    ngOnInit(): void {
        this.store
            .select((store) => {
                return store.auth;
            })
            .subscribe((auth) => {
                console.log(auth);
            });
    }

    handleSubmit(): void {
        console.log(this.loginSurfcampForm);
        const credentials = {
            username: this.loginSurfcampForm.value.username,
            password: this.loginSurfcampForm.value.password,
        };
        console.log(credentials);
        if (this.loginSurfcampForm.value.userType === 'surfcamp') {
            this.authService.loginSurfcamp(credentials).subscribe((resp) => {
                console.log(resp);
                if (resp.token) {
                    localStorage.setItem('token', resp.token);
                    this.store.dispatch(login({ loginResponse: resp }));
                    //redirect to surfcamp dashboard
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
            });
        }
    }
}
