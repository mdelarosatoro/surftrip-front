import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampLoginResponseI } from 'src/app/interfaces/surfcamps.interfaces';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
    selector: 'app-package-details',
    templateUrl: './package-details.component.html',
    styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent implements OnInit {
    auth!: SurfcampLoginResponseI;
    package!: any;

    constructor(
        private store: Store<{ auth: SurfcampLoginResponseI }>,
        private route: ActivatedRoute,
        public packagesService: PackagesService
    ) {}

    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.store
            .select((store) => store.auth)
            .subscribe((data) => {
                this.auth = { ...data };
                this.packagesService
                    .getPackageById(
                        this.route.snapshot.paramMap.get('id') as string,
                        this.auth.token
                    )
                    .subscribe((resp) => {
                        console.log(resp);
                        this.package = resp;
                    });
            });
    }
}
