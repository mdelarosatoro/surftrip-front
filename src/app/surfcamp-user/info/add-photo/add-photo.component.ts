import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getStorage, uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { addPhoto } from 'src/app/state/surfcamp/surfcamp.actions';
import { app } from '../../../firebase/connection';
@Component({
    selector: 'app-add-photo',
    templateUrl: './add-photo.component.html',
    styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {
    newPhotoForm: FormGroup;
    storage: any;
    fileToUpload: any;
    auth!: SurfcampLoginResponseI;
    surfcamp!: SurfcampI;

    constructor(
        public fb: FormBuilder,
        private surfcampsService: SurfcampsService,
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        private location: Location
    ) {
        this.storage = getStorage(app);
        this.newPhotoForm = this.fb.group({
            description: ['', []],
        });
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
        const payload = {
            description: this.newPhotoForm.value.description,
            photoUrl: url,
        };
        this.surfcampsService
            .addPhoto(this.auth.token, this.surfcamp._id, payload)
            .subscribe((resp) => {
                this.store.dispatch(addPhoto({ newPhotosArr: resp.photos }));
            });
        if (url) this.location.back();
    }
}
