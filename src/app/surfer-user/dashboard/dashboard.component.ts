import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    auth!: UserLoginResponseI;

    constructor(private store: Store<{ auth: UserLoginResponseI }>) {}

    ngOnInit(): void {
        this.store
            .select((store) => store.auth)
            .subscribe((data) => {
                this.auth = { ...data };
            });
    }
}
