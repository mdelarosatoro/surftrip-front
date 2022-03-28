import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addLocationStringToSurfcamp } from 'src/app/helpers/surfcampData.helpers';
import {
    SurfcampI,
    SurfcampWithLocationI,
    SurfcampWithReviewScoreAndLocationI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-surfcamp-info',
    templateUrl: './surfcamp-info.component.html',
    styleUrls: ['./surfcamp-info.component.scss'],
})
export class SurfcampInfoComponent implements OnInit {
    auth!: UserLoginResponseI;
    surfcampId!: string;
    surfcamp!: SurfcampI;
    surfcampWithLocation!: SurfcampWithLocationI;
    constructor(
        public route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public surfcampsService: SurfcampsService
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
        this.surfcampWithLocation = {
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
            locationString: '',
            description: '',
            comments: [],
            customers: [],
        };
    }

    ngOnInit(): void {
        this.surfcampId = this.route.snapshot.paramMap.get('id') as string;
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfcampsService
                    .getSurfcampById(this.auth.token, this.surfcampId)
                    .subscribe(async (resp) => {
                        this.surfcamp = resp;
                        this.surfcampWithLocation =
                            await addLocationStringToSurfcamp(this.surfcamp);
                    });
            });
    }
}
