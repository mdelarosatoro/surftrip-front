import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-surfcamp-details',
    templateUrl: './surfcamp-details.component.html',
    styleUrls: ['./surfcamp-details.component.scss'],
})
export class SurfcampDetailsComponent implements OnInit {
    auth!: UserLoginResponseI;
    surfcamp!: SurfcampI;
    constructor(
        private route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        private surfcampsService: SurfcampsService
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
            location: '',
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
                console.log(this.auth);
                this.surfcampsService
                    .getSurfcampById(
                        this.auth.token,
                        this.route.snapshot.paramMap.get('id') as string
                    )
                    .subscribe((resp) => {
                        this.surfcamp = resp;
                        console.log(this.surfcamp);
                    });
            });
    }
}
