import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
    declarations: [InfoComponent, InfoListComponent, GalleryComponent, ReviewsComponent],
    imports: [
        CommonModule,
        InfoRoutingModule,
        CoreModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class InfoModule {}
