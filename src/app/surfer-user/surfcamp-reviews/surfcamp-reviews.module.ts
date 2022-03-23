import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampReviewsRoutingModule } from './surfcamp-reviews-routing.module';
import { SurfcampReviewsComponent } from './surfcamp-reviews.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { AddReviewComponent } from './add-review/add-review.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
    declarations: [SurfcampReviewsComponent, AddReviewComponent, ReviewsComponent],
    imports: [
        CommonModule,
        SurfcampReviewsRoutingModule,
        FontAwesomeModule,
        CoreModule,
    ],
})
export class SurfcampReviewsModule {}
