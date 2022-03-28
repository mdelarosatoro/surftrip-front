import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
    addLocationStringToPackages,
    addPackageReviewData,
} from 'src/app/helpers/surfcampData.helpers';
import {
    PackageI,
    PackageithReviewScoreI,
} from 'src/app/interfaces/packages.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { PackagesService } from 'src/app/services/packages.service';

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
    packagesWithLocation!: any[];
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
                    .subscribe(async (resp) => {
                        this.packages = addPackageReviewData(resp);
                        this.packagesWithLocation =
                            await addLocationStringToPackages(this.packages);
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
