import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import { SocketService } from 'src/app/services/socket.service';
import { SurfcampHelpersService } from 'src/app/services/surfcamp-helpers.service';

@Component({
    selector: 'app-package-details',
    templateUrl: './package-details.component.html',
    styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent implements OnInit {
    auth!: UserLoginResponseI;
    packageId!: string;
    package!: PackageI;
    packageWithLocation!: any;
    successBookMessage: { state: boolean; package: string };
    constructor(
        public route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public packagesService: PackagesService,
        public socket: SocketService,
        public helpers: SurfcampHelpersService
    ) {
        this.package = {
            _id: '',
            surfcamp: {} as SurfcampI,
            icon: '',
            description: '',
            days: 0,
            price: 0,
            name: '',
        };
        this.packageWithLocation = {
            _id: '',
            surfcamp: { locationString: '' },
            icon: '',
            description: '',
            days: 0,
            price: 0,
            name: '',
        };
        this.successBookMessage = { state: false, package: '' };
    }

    ngOnInit(): void {
        this.packageId = this.route.snapshot.paramMap.get(
            'idPackage'
        ) as string;

        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.packagesService
                    .getPackageById(this.auth.token, this.packageId)
                    .subscribe((resp) => {
                        this.package = resp;
                        this.helpers
                            .addLocationStringToPackage(this.package)
                            .then((result) => {
                                this.packageWithLocation = result;
                            });
                    });
            });
    }

    bookPackage(id: string) {
        this.packagesService
            .bookPackage(this.auth.token, id)
            .subscribe((resp: any) => {
                console.log(resp);
                window.location.href = resp.url;
                if (resp.message) {
                    this.successBookMessage = {
                        state: true,
                        package: this.package._id,
                    };
                    const booking = {
                        userId: this.auth.id,
                        packageId: this.package._id,
                        surfcampId: this.package.surfcamp._id,
                    };
                    this.socket.sendBooking(booking);
                }
            });
    }
}
