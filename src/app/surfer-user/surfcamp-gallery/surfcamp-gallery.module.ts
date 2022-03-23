import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampGalleryRoutingModule } from './surfcamp-gallery-routing.module';
import { SurfcampGalleryComponent } from './surfcamp-gallery.component';


@NgModule({
  declarations: [
    SurfcampGalleryComponent
  ],
  imports: [
    CommonModule,
    SurfcampGalleryRoutingModule
  ]
})
export class SurfcampGalleryModule { }
