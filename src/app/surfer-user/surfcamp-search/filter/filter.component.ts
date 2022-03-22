import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
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
    @Output() filterEvent: EventEmitter<SurfcampI[]>;

    constructor(
        public fb: FormBuilder,
        private surfcampsService: SurfcampsService,
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
        this.surfcampsService
            .search(this.auth.token, this.filterForm.value)
            .subscribe((resp) => {
                this.filterEvent.next(resp);
            });
    }
}
