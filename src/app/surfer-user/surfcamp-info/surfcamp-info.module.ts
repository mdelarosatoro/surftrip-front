import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampInfoRoutingModule } from './surfcamp-info-routing.module';
import { SurfcampInfoComponent } from './surfcamp-info.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [SurfcampInfoComponent],
    imports: [CommonModule, SurfcampInfoRoutingModule, CoreModule],
})
export class SurfcampInfoModule {}
