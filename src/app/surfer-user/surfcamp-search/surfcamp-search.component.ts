import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
    addLocationString,
    addSurfcampReviewData,
} from 'src/app/helpers/surfcampData.helpers';
import {
    SurfcampI,
    SurfcampWithReviewScoreAndLocationI,
    SurfcampWithReviewScoreI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-surfcamp-search',
    templateUrl: './surfcamp-search.component.html',
    styleUrls: ['./surfcamp-search.component.scss'],
})
export class SurfcampSearchComponent implements OnInit {
    faStar = faStar;
    faFilter = faFilter;
    auth!: UserLoginResponseI;
    surfcamps!: SurfcampWithReviewScoreI[];
    reviewScore: number;
    filterState: boolean;
    surfcampsWithLocation: SurfcampWithReviewScoreAndLocationI[];

    constructor(
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public surfampsService: SurfcampsService,
        public router: Router
    ) {
        this.surfcamps = [];
        this.filterState = false;
        this.reviewScore = 0;
        this.surfcampsWithLocation = [];
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfampsService
                    .getAllSurfcamps(this.auth.token)
                    .subscribe(async (resp) => {
                        this.surfcamps = addSurfcampReviewData(resp);
                        this.surfcampsWithLocation = await addLocationString(
                            this.surfcamps
                        );
                    });
            });
    }

    toggleFilter() {
        this.filterState = !this.filterState;
    }

    handleFilter(filteredSurfcamps: SurfcampI[]) {
        this.surfcamps = addSurfcampReviewData(filteredSurfcamps);
    }

    goToDetails(id: string) {
        this.router.navigateByUrl(`/surfcamp-details/${id}`);
    }
}
