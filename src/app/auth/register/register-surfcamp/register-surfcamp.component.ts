import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-register-surfcamp',
    templateUrl: './register-surfcamp.component.html',
    styleUrls: ['./register-surfcamp.component.scss'],
})
export class RegisterSurfcampComponent implements OnInit {
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
        this.authService
            .registerSurfcamp(this.registerSurfcampForm.value)
            .subscribe((resp) => {
                if (resp._id) {
                    console.log('Registration success');
                }
            });
    }
}
