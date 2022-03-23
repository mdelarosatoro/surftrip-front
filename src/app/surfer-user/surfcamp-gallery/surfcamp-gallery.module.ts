import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampGalleryRoutingModule } from './surfcamp-gallery-routing.module';
import { SurfcampGalleryComponent } from './surfcamp-gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [SurfcampGalleryComponent],
    imports: [
        CommonModule,
        SurfcampGalleryRoutingModule,
        FontAwesomeModule,
        CoreModule,
    ],
})
export class SurfcampGalleryModule {}
