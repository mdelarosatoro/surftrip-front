import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import {
    CustomersI,
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
    faInfoCircle = faInfoCircle;
    auth!: SurfcampLoginResponseI;
    customers!: any;
    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        private usersService: UsersService
    ) {}

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.customers = data.surfcamp.customers;
                console.log(this.customers);
                this.usersService
                    .getAll(data.auth.token)
                    .subscribe((allUsers) => {
                        this.customers = this.customers.map(
                            (item: CustomersI) => ({
                                bookedAt: moment(item.bookedAt).format(
                                    'MM/DD/YYYY HH:mm'
                                ),
                                user: allUsers.find(
                                    (userItem) => userItem._id === item.user
                                ),
                                package:
                                    data.surfcamp.packages &&
                                    data.surfcamp.packages.find(
                                        (packageItem: PackageI) =>
                                            packageItem._id === item.package
                                    ),
                            })
                        );
                        this.customers = this.customers.reverse();
                        console.log(this.customers);
                    });
            });
    }
}
