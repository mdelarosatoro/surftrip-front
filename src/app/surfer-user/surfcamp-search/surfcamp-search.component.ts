import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { addSurfcampReviewData } from 'src/app/helpers/surfcampData.helpers';
import {
    SurfcampI,
    SurfcampWithReviewScoreI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

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

    constructor(
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        private surfampsService: SurfcampsService,
        private router: Router
    ) {
        this.surfcamps = [];
        this.filterState = false;
        this.reviewScore = 0;
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfampsService
                    .getAllSurfcamps(this.auth.token)
                    .subscribe((resp) => {
                        this.surfcamps = addSurfcampReviewData(resp);
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
