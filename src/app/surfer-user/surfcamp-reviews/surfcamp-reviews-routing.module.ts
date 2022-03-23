import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampReviewsComponent } from './surfcamp-reviews.component';

const routes: Routes = [{ path: '', component: SurfcampReviewsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampReviewsRoutingModule {}
