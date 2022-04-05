import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
    registrationError: boolean;
    fileToUpload: any;
    registerUserForm: FormGroup;
    loadingStatus: boolean;
    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        public router: Router,
        public firebase: FirebaseService
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
        this.loadingStatus = false;
    }

    ngOnInit(): void {}

    async handleSubmit() {
        this.loadingStatus = true;
        let url;
        if (this.fileToUpload) {
            url = await this.firebase.getDownloadUrl(this.fileToUpload);
        } else {
            url =
                'https://firebasestorage.googleapis.com/v0/b/surftrip-18659.appspot.com/o/default%20profile.jpeg?alt=media&token=4db234c6-42c7-4e73-b834-c2d626f77361';
        }
        this.authService
            .registerUser({
                ...this.registerUserForm.value,
                profilePicUrl: url,
            })
            .subscribe({
                next: (resp) => {
                    if (resp._id) {
                        this.router.navigateByUrl('/login');
                    }
                    this.loadingStatus = false;
                },
                error: (error) => {
                    this.registrationError = true;
                    this.loadingStatus = false;
                },
            });
    }

    handleFileInput(e: any) {
        this.fileToUpload = e.target.files[0];
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
