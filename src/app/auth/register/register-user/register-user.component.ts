import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
    registrationError: boolean;
    registerUserForm: FormGroup;
    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        public router: Router
    ) {
        this.registerUserForm = fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            email: new FormControl('', [Validators.required, Validators.email]),
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            confirmPassword: new FormControl('', [Validators.required]),
        });
        this.registrationError = false;
    }

    ngOnInit(): void {}

    handleSubmit(): void {
        this.authService.registerUser(this.registerUserForm.value).subscribe({
            next: (resp) => {
                if (resp._id) {
                    console.log('Registration success');
                    this.router.navigateByUrl('/login');
                }
            },
            error: (error) => {
                this.registrationError = true;
            },
        });
    }

    get name() {
        return this.registerUserForm.get('name');
    }
    get lastName() {
        return this.registerUserForm.get('lastName');
    }
    get email() {
        return this.registerUserForm.get('email');
    }
    get username() {
        return this.registerUserForm.get('username');
    }
    get password() {
        return this.registerUserForm.get('password');
    }
    get confirmPassword() {
        return this.registerUserForm.get('confirmPassword');
    }
}
