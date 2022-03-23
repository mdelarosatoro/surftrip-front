import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampReviewsRoutingModule } from './surfcamp-reviews-routing.module';
import { SurfcampReviewsComponent } from './surfcamp-reviews.component';


@NgModule({
  declarations: [
    SurfcampReviewsComponent
  ],
  imports: [
    CommonModule,
    SurfcampReviewsRoutingModule
  ]
})
export class SurfcampReviewsModule { }
