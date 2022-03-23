import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-surfcamp-packages',
    templateUrl: './surfcamp-packages.component.html',
    styleUrls: ['./surfcamp-packages.component.scss'],
})
export class SurfcampPackagesComponent implements OnInit {
    auth!: UserLoginResponseI;
    surfcamp!: SurfcampI;
    successBookMessage: { state: boolean; package: string };
    constructor(
        private route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        private surfcampsService: SurfcampsService,
        private packagesService: PackagesService
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
        this.successBookMessage = { state: false, package: '' };
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
                        console.log(this.surfcamp.packages);
                    });
            });
    }

    bookPackage(id: string) {
        console.log(id);
        this.packagesService
            .bookPackage(this.auth.token, id)
            .subscribe((resp) => {
                if (resp.message) {
                    this.successBookMessage = {
                        state: true,
                        package: this.surfcamp.packages.find(
                            (item) => item._id === id
                        )?.name as string,
                    };
                }
            });
    }
}
