import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampDetailsRoutingModule } from './surfcamp-details-routing.module';
import { SurfcampDetailsComponent } from './surfcamp-details.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [SurfcampDetailsComponent],
    imports: [CommonModule, SurfcampDetailsRoutingModule, CoreModule],
})
export class SurfcampDetailsModule {}
