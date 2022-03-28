import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
    faPencilAlt,
    faSave,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { addLocationStringToSurfcamp } from 'src/app/helpers/surfcampData.helpers';
import {
    SurfcampI,
    SurfcampLoginResponseI,
    SurfcampWithLocationI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { updateSurfcamp } from 'src/app/state/surfcamp/surfcamp.actions';

@Component({
    selector: 'app-info-list',
    templateUrl: './info-list.component.html',
    styleUrls: ['./info-list.component.scss'],
})
export class InfoListComponent implements OnInit {
    faPencilAlt = faPencilAlt;
    faSave = faSave;
    faTimesCircle = faTimesCircle;
    auth!: SurfcampLoginResponseI;
    surfcamp: SurfcampI;
    editSurfcampForm: FormGroup;
    editMode: boolean;
    surfcampWithLocation!: SurfcampWithLocationI;

    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        public surfcampsService: SurfcampsService,
        public fb: FormBuilder
    ) {
        this.surfcamp = {
            _id: '',
            email: '',
            username: '',
            name: '',
            rating: '',
            packages: [],
            role: '',
            photos: [],
            skillLevels: [],
            location: [],
            description: '',
            comments: [],
            customers: [],
        };
        this.editMode = false;
        this.editSurfcampForm = this.fb.group({
            name: ['', []],
            location: ['', []],
            skillBeginner: [false, []],
            skillIntermediate: [false, []],
            skillAdvanced: [false, []],
            skillExpert: [false, []],
            description: ['', []],
        });
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe(async (data) => {
                this.auth = data.auth;
                this.surfcamp = data.surfcamp;
                this.editSurfcampForm.setValue({
                    name: this.surfcamp.name,
                    location: this.surfcamp.location,
                    description: this.surfcamp.description,
                    skillBeginner: this.surfcamp.skillLevels.includes(
                        'Beginner'
                    )
                        ? true
                        : false,
                    skillIntermediate: this.surfcamp.skillLevels.includes(
                        'Intermediate'
                    )
                        ? true
                        : false,
                    skillAdvanced: this.surfcamp.skillLevels.includes(
                        'Advanced'
                    )
                        ? true
                        : false,
                    skillExpert: this.surfcamp.skillLevels.includes('Expert')
                        ? true
                        : false,
                });
                this.surfcampWithLocation = await addLocationStringToSurfcamp(
                    this.surfcamp
                );
            });
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    saveSurfcamp() {
        const payload = {
            name: this.editSurfcampForm.controls['name'].value,
            location: this.editSurfcampForm.controls['location'].value,
            skillLevels: [] as string[],
            description: this.editSurfcampForm.controls['description'].value,
        };

        this.editSurfcampForm.controls['skillBeginner'].value &&
            payload.skillLevels.push('Beginner');
        this.editSurfcampForm.controls['skillIntermediate'].value &&
            payload.skillLevels.push('Intermediate');
        this.editSurfcampForm.controls['skillAdvanced'].value &&
            payload.skillLevels.push('Advanced');
        this.editSurfcampForm.controls['skillExpert'].value &&
            payload.skillLevels.push('Expert');

        this.surfcampsService
            .updateSurfcamp(this.auth.token, this.surfcamp._id, payload)
            .subscribe((resp) => {
                this.store.dispatch(updateSurfcamp({ updatedSurfcamp: resp }));
                this.editMode = false;
            });
    }
}
