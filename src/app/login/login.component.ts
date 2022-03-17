import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginSurfcampForm: FormGroup;
    constructor(public fb: FormBuilder, public authService: AuthService) {
        this.loginSurfcampForm = fb.group({
            userType: ['', []],
            username: ['', []],
            password: ['', []],
        });
    }

    ngOnInit(): void {}

    handleSubmit() {}
}
