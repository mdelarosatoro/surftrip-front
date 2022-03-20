import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoListComponent } from './info-list/info-list.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    { path: '', component: InfoListComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'add-photo', component: AddPhotoComponent },
    { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
