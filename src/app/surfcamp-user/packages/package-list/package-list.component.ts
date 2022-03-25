import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-package-list',
    templateUrl: './package-list.component.html',
    styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent implements OnInit {
    faInfoCircle = faInfoCircle;
    auth!: SurfcampLoginResponseI;
    packages!: any;
    packagesPriceTotal: number;
    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>
    ) {
        this.packagesPriceTotal = 0;
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.packages = data.surfcamp.packages;
                data.surfcamp.packages?.forEach(
                    (item) => (this.packagesPriceTotal += item.price)
                );
            });
    }
}
