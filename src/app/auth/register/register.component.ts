import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerSurfcampForm: FormGroup;
    constructor(public fb: FormBuilder, public authService: AuthService) {
        this.registerSurfcampForm = fb.group({
            name: ['', []],
            location: ['', []],
            email: ['', []],
            username: ['', []],
            password: ['', []],
            confirmPassword: ['', []],
            beginner: [false, []],
            intermediate: [false, []],
            advanced: [false, []],
            expert: [false, []],
            description: ['', []],
        });
    }

    ngOnInit(): void {}

    handleSubmit(): void {
        console.log(this.registerSurfcampForm.value);
        this.authService
            .registerSurfcamp(this.registerSurfcampForm.value)
            .subscribe((resp) => {
                console.log(resp);
                if (resp._id) {
                    console.log('Registration success');
                }
            });
    }
}
