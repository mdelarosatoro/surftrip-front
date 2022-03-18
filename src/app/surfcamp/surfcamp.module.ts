import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampRoutingModule } from './surfcamp-routing.module';
import { SurfcampComponent } from './surfcamp.component';

@NgModule({
    declarations: [SurfcampComponent],
    imports: [CommonModule, SurfcampRoutingModule],
})
export class SurfcampModule {}
