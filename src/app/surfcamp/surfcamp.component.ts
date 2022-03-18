import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SurfcampLoginResponseI } from '../interfaces/surfcamps.interfaces';

@Component({
    selector: 'app-surfcamp',
    templateUrl: './surfcamp.component.html',
    styleUrls: ['./surfcamp.component.scss'],
})
export class SurfcampComponent implements OnInit {
    auth!: SurfcampLoginResponseI;
    constructor(private store: Store<{ auth: SurfcampLoginResponseI }>) {}

    ngOnInit(): void {
        this.store
            .select((store) => store.auth)
            .subscribe((data) => {
                this.auth = { ...data };
            });
    }
}
