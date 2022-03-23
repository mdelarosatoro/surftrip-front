import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookingsI, PackageI } from 'src/app/interfaces/packages.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
    auth!: UserLoginResponseI;
    bookings!: BookingsI[];
    constructor(
        private store: Store<{ auth: UserLoginResponseI }>,
        private usersService: UsersService
    ) {}

    ngOnInit(): void {
        this.store
            .select((store) => store.auth)
            .subscribe((data) => {
                this.auth = { ...data };
                console.log(this.auth);
                this.usersService
                    .getUserById(this.auth.token, this.auth.id)
                    .subscribe((resp) => {
                        console.log(resp);
                        this.bookings = resp.bookings.map((item) => ({
                            ...item,
                            bookedAt: moment(item.bookedAt).format(
                                'MM/DD/YYYY'
                            ),
                        }));
                    });
            });
    }
}
