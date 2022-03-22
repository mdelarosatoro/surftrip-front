import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampDetailsRoutingModule } from './surfcamp-details-routing.module';
import { SurfcampDetailsComponent } from './surfcamp-details.component';

@NgModule({
    declarations: [SurfcampDetailsComponent],
    imports: [CommonModule, SurfcampDetailsRoutingModule],
})
export class SurfcampDetailsModule {}
