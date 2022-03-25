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
    selector: 'app-register-surfcamp',
    templateUrl: './register-surfcamp.component.html',
    styleUrls: ['./register-surfcamp.component.scss'],
})
export class RegisterSurfcampComponent implements OnInit {
    registerSurfcampForm: FormGroup;
    registrationError: boolean;
    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        public router: Router
    ) {
        this.registerSurfcampForm = fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            location: new FormControl('', [Validators.required]),
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
            beginner: [false, []],
            intermediate: [false, []],
            advanced: [false, []],
            expert: [false, []],
            description: ['', []],
        });
        this.registrationError = false;
    }

    ngOnInit(): void {}

    handleSubmit(): void {
        this.authService
            .registerSurfcamp(this.registerSurfcampForm.value)
            .subscribe({
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
        return this.registerSurfcampForm.get('name');
    }
    get location() {
        return this.registerSurfcampForm.get('location');
    }
    get email() {
        return this.registerSurfcampForm.get('email');
    }
    get username() {
        return this.registerSurfcampForm.get('username');
    }
    get password() {
        return this.registerSurfcampForm.get('password');
    }
    get confirmPassword() {
        return this.registerSurfcampForm.get('confirmPassword');
    }
    get beginner() {
        return this.registerSurfcampForm.get('beginner');
    }
    get intermediate() {
        return this.registerSurfcampForm.get('intermediate');
    }
    get advanced() {
        return this.registerSurfcampForm.get('advanced');
    }
    get expert() {
        return this.registerSurfcampForm.get('expert');
    }
}
