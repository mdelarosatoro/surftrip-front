import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerSurfcampForm: FormGroup;
    constructor(public fb: FormBuilder) {
        this.registerSurfcampForm = fb.group({
            name: ['', []],
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
    }
}
