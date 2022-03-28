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
    test: any[];

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
        this.test = [];
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
                        console.log(this.surfcamps);
                        this.test = this.surfcamps.map(async (item) => {
                            const response = await fetch(
                                `https://api.mapbox.com/geocoding/v5/mapbox.places/${item.location[0]},${item.location[1]}.json?access_token=${environment.mapBoxToken}`
                            );
                            const data = await response.json();
                            console.log(data);
                            return { ...item, location: item.location };
                        });
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
