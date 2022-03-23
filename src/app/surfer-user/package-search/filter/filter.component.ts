import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    filterForm: FormGroup;
    faStar = faStar;
    starArr: number[];
    auth!: UserLoginResponseI;
    @Output() filterEvent: EventEmitter<PackageI[]>;

    constructor(
        public fb: FormBuilder,
        private packagesService: PackagesService,
        private store: Store<{
            auth: UserLoginResponseI;
        }>
    ) {
        this.starArr = [1, 2, 3, 4, 5];
        this.filterForm = fb.group({
            skillBeginner: [false, []],
            skillIntermediate: [false, []],
            skillAdvanced: [false, []],
            skillExpert: [false, []],
            rating: [0, []],
            location: ['', []],
            price: ['', []],
            days: ['', []],
        });
        this.filterEvent = new EventEmitter();
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
            });
    }

    setMinRating(star: number) {
        console.log(star);
        if (this.filterForm.value.rating === star) {
            this.filterForm.setValue({ ...this.filterForm.value, rating: 0 });
        } else {
            this.filterForm.setValue({
                ...this.filterForm.value,
                rating: star,
            });
        }
    }

    handleSubmit() {
        this.packagesService
            .search(this.auth.token, this.filterForm.value)
            .subscribe((resp) => {
                this.filterEvent.next(resp);
            });
    }
}
