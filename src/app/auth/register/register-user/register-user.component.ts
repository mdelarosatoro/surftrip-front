import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
    registerUserForm: FormGroup;
    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        public router: Router
    ) {
        this.registerUserForm = fb.group({
            name: ['', []],
            lastName: ['', []],
            email: ['', []],
            username: ['', []],
            password: ['', []],
            confirmPassword: ['', []],
        });
    }

    ngOnInit(): void {}

    handleSubmit(): void {
        this.authService
            .registerUser(this.registerUserForm.value)
            .subscribe((resp) => {
                if (resp._id) {
                    console.log('Registration success');
                    this.router.navigateByUrl('/login');
                }
            });
    }
}
