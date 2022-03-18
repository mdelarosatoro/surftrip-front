import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampRoutingModule } from './surfcamp-routing.module';
import { SurfcampComponent } from './surfcamp.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [SurfcampComponent],
    imports: [CommonModule, SurfcampRoutingModule, CoreModule],
})
export class SurfcampModule {}
