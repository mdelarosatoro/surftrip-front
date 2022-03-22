import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampSearchRoutingModule } from './surfcamp-search-routing.module';
import { SurcampSearchComponent } from './surcamp-search.component';


@NgModule({
  declarations: [
    SurcampSearchComponent
  ],
  imports: [
    CommonModule,
    SurfcampSearchRoutingModule
  ]
})
export class SurfcampSearchModule { }
