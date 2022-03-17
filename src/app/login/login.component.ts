import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SurfcampLoginResponseI } from '../interfaces/surfcamps.interfaces';
import { AuthService } from '../services/auth.service';
import { login } from '../state/tasks.actions';

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
        private store: Store<{ auth: SurfcampLoginResponseI }>
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
                }
            });
        }
    }
}
