import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
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
        this.surfcampId = this.route.snapshot.paramMap.get('id') as string;
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfcampsService
                    .getSurfcampById(this.auth.token, this.surfcampId)
                    .subscribe((resp) => {
                        console.log(resp);
                        this.surfcamp = resp;
                    });
            });
    }
}
