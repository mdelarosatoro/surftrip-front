import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
    CommentsPopulatedMI,
    CommentsPopulatedMStarsI,
    SurfcampI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
    auth!: UserLoginResponseI;
    comments!: CommentsPopulatedMStarsI[];
    reviewScore: number;
    faStar = faStar;
    surfcampId!: string;

    constructor(
        private route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        private surfcampsService: SurfcampsService
    ) {
        this.comments = [];
        this.reviewScore = 0;
    }

    ngOnInit(): void {
        this.surfcampId = this.route.snapshot.paramMap.get('id') as string;
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                console.log(this.auth);
                this.surfcampsService
                    .getSurfcampCommentsById(this.auth.token, this.surfcampId)
                    .subscribe((resp) => {
                        this.comments = resp.map((item) => {
                            return {
                                ...item,
                                starArr: Array(item.rating).fill(1),
                                emptyStarArr: Array(5 - item.rating).fill(1),
                            };
                        });
                        this.comments.forEach((comment) => {
                            this.reviewScore =
                                this.reviewScore + comment.rating;
                        });
                    });
            });
    }
}
