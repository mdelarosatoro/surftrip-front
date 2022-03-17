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
            });
        }
    }
}
