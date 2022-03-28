import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-surfcamp-details',
    templateUrl: './surfcamp-details.component.html',
    styleUrls: ['./surfcamp-details.component.scss'],
})
export class SurfcampDetailsComponent implements OnInit {
    auth!: UserLoginResponseI;
    surfcamp!: SurfcampI;
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
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfcampsService
                    .getSurfcampById(
                        this.auth.token,
                        this.route.snapshot.paramMap.get('id') as string
                    )
                    .subscribe((resp) => {
                        this.surfcamp = resp;
                    });
            });
    }
}
