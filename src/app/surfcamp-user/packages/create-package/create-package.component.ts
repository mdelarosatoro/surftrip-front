import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from 'src/app/firebase/connection';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import { addPackage } from 'src/app/state/surfcamp/surfcamp.actions';

@Component({
    selector: 'app-create-package',
    templateUrl: './create-package.component.html',
    styleUrls: ['./create-package.component.scss'],
})
export class CreatePackageComponent implements OnInit {
    createPackageForm: FormGroup;
    storage: any;
    auth!: SurfcampLoginResponseI;
    surfcamp!: SurfcampI;
    fileToUpload: any;
    constructor(
        public fb: FormBuilder,
        public packagesService: PackagesService,
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        private location: Location
    ) {
        this.createPackageForm = fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            price: new FormControl('', [Validators.required]),
            days: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
        });
        this.storage = getStorage(app);
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfcamp = data.surfcamp;
            });
    }

    handleFileInput(e: any) {
        this.fileToUpload = e.target.files[0];
    }

    async handleSubmit() {
        let url = '';
        const imageRef = ref(this.storage, this.fileToUpload.name);
        await uploadBytes(imageRef, this.fileToUpload);
        url = await getDownloadURL(imageRef);
        const newPackagePayload = {
            ...this.createPackageForm.value,
            icon: url,
        };
        this.packagesService
            .createPackage(this.auth.token, newPackagePayload)
            .subscribe((resp) => {
                console.log(resp);
                this.store.dispatch(addPackage({ newPackage: resp }));
            });
        if (url) this.location.back();
    }

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
