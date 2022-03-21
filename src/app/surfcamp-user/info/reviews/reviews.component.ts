import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
    CommentsPopulatedI,
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserI } from 'src/app/interfaces/users.interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
    faStar = faStar;
    auth!: SurfcampLoginResponseI;
    comments!: CommentsPopulatedI[];
    reviewScore: number;
    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        private usersService: UsersService
    ) {
        this.reviewScore = 0;
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.usersService.getAll(this.auth.token).subscribe((resp) => {
                    this.comments = data.surfcamp.comments.map((item) => {
                        return {
                            ...item,
                            user: resp.find(
                                (user) => user._id === item.user
                            ) as UserI,
                            starArr: Array(item.rating).fill(1),
                            emptyStarArr: Array(5 - item.rating).fill(1),
                        };
                    });
                    this.comments.forEach((comment) => {
                        console.log(comment.rating);
                        this.reviewScore = this.reviewScore + comment.rating;
                        console.log(this.reviewScore);
                    });
                });
            });
    }
}
