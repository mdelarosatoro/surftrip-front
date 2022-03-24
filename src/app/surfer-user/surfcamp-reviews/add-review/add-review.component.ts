import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {
    faStar = faStar;
    addReviewForm: FormGroup;
    starArr: number[];
    surfcampId!: string;
    auth!: UserLoginResponseI;

    constructor(
        public fb: FormBuilder,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public route: ActivatedRoute,
        public surfcampsService: SurfcampsService,
        public location: Location
    ) {
        this.starArr = [1, 2, 3, 4, 5];
        this.addReviewForm = fb.group({
            comment: ['', []],
            rating: [0, []],
        });
    }

    ngOnInit(): void {
        this.surfcampId = this.route.snapshot.paramMap.get('id') as string;
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
            });
    }

    handleSubmit() {
        this.surfcampsService
            .addComment(
                this.auth.token,
                this.surfcampId,
                this.addReviewForm.value
            )
            .subscribe((resp) => {
                if (resp.length > 0) {
                    this.location.back();
                }
            });
    }

    setRating(star: number) {
        if (this.addReviewForm.value.rating === star) {
            this.addReviewForm.setValue({
                ...this.addReviewForm.value,
                rating: 0,
            });
        } else {
            this.addReviewForm.setValue({
                ...this.addReviewForm.value,
                rating: star,
            });
        }
    }
}
