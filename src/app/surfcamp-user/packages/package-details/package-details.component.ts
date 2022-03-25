import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import {
    SurfcampFilteredDataI,
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import {
    faPencilAlt,
    faSave,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
    deletePackage,
    udpatePackage,
} from 'src/app/state/surfcamp/surfcamp.actions';
import { Location } from '@angular/common';

@Component({
    selector: 'app-package-details',
    templateUrl: './package-details.component.html',
    styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent implements OnInit {
    faPencilAlt = faPencilAlt;
    faSave = faSave;
    faTimesCircle = faTimesCircle;
    auth!: SurfcampLoginResponseI;
    package: PackageI;
    editPackageForm: FormGroup;
    editMode: boolean;

    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        private route: ActivatedRoute,
        public packagesService: PackagesService,
        public fb: FormBuilder,
        public location: Location
    ) {
        this.package = {
            _id: '',
            name: '',
            description: '',
            icon: '',
            days: 0,
            price: 0,
            surfcamp: {} as SurfcampFilteredDataI,
        };
        this.editMode = false;
        this.editPackageForm = this.fb.group({
            name: ['', []],
            price: ['', []],
            days: ['', []],
            description: ['', []],
        });
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                if (data.surfcamp.packages) {
                    this.package = data.surfcamp.packages.find(
                        (item) =>
                            item._id === this.route.snapshot.paramMap.get('id')
                    ) as PackageI;
                    this.editPackageForm.setValue({
                        name: this.package.name,
                        price: this.package.price,
                        days: this.package.days,
                        description: this.package.description,
                    });
                }
            });
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    savePackage() {
        this.packagesService
            .updatePackage(
                this.auth.token,
                this.package._id,
                this.editPackageForm.value
            )
            .subscribe((resp) => {
                this.store.dispatch(udpatePackage({ updatedPackage: resp }));
                this.editMode = false;
            });
    }
}
