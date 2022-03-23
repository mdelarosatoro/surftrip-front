import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SurfcampReviewsComponent } from './surfcamp-reviews.component';

const routes: Routes = [
    { path: '', component: ReviewsComponent },
    { path: 'add', component: AddReviewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampReviewsRoutingModule {}
