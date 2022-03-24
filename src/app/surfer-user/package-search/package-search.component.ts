import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
    addPackageReviewData,
    addSurfcampReviewData,
} from 'src/app/helpers/surfcampData.helpers';
import {
    PackageI,
    PackageithReviewScoreI,
} from 'src/app/interfaces/packages.interfaces';
import {
    SurfcampI,
    SurfcampWithReviewScoreI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-package-search',
    templateUrl: './package-search.component.html',
    styleUrls: ['./package-search.component.scss'],
})
export class PackageSearchComponent implements OnInit {
    faStar = faStar;
    faFilter = faFilter;
    auth!: UserLoginResponseI;
    packages!: PackageithReviewScoreI[];
    reviewScore: number;
    filterState: boolean;

    constructor(
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public packagesService: PackagesService,
        public router: Router
    ) {
        this.packages = [];
        this.filterState = false;
        this.reviewScore = 0;
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.packagesService
                    .getAllPackages(this.auth.token)
                    .subscribe((resp) => {
                        this.packages = addPackageReviewData(resp);
                    });
            });
    }

    toggleFilter() {
        this.filterState = !this.filterState;
    }

    handleFilter(filteredPackages: PackageI[]) {
        this.packages = addPackageReviewData(filteredPackages);
    }

    goToDetails(packageItem: PackageithReviewScoreI) {
        this.router.navigateByUrl(
            `/surfcamp-packages/${packageItem.surfcamp._id}/packages/${packageItem._id}`
        );
    }
}