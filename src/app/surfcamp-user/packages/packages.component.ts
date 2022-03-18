import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SurfcampLoginResponseI } from 'src/app/interfaces/surfcamps.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
    faInfoCircle = faInfoCircle;
    auth!: SurfcampLoginResponseI;
    packages!: any;
    constructor(
        private store: Store<{ auth: SurfcampLoginResponseI }>,
        public surfcampsService: SurfcampsService
    ) {}

    ngOnInit(): void {
        this.store
            .select((store) => store.auth)
            .subscribe((data) => {
                this.auth = { ...data };
                this.surfcampsService
                    .getSurfcampPackages(this.auth.token, this.auth.id)
                    .subscribe((resp) => {
                        console.log(resp);
                        this.packages = resp;
                    });
            });
    }
}
