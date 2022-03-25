import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
    selector: 'app-create-package',
    templateUrl: './create-package.component.html',
    styleUrls: ['./create-package.component.scss'],
})
export class CreatePackageComponent implements OnInit {
    createPackageForm: FormGroup;
    constructor(
        public fb: FormBuilder,
        public packagesService: PackagesService
    ) {
        this.createPackageForm = fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            price: new FormControl('', [Validators.required]),
            days: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            icon: new FormControl('', [Validators.required]),
        });
    }

    ngOnInit(): void {}

    get name() {
        return this.createPackageForm.get('name');
    }
    get price() {
        return this.createPackageForm.get('price');
    }
    get days() {
        return this.createPackageForm.get('days');
    }
    get description() {
        return this.createPackageForm.get('description');
    }
    get icon() {
        return this.createPackageForm.get('icon');
    }
}
