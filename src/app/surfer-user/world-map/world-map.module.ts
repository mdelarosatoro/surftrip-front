import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldMapRoutingModule } from './world-map-routing.module';
import { WorldMapComponent } from './world-map.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [WorldMapComponent],
    imports: [CommonModule, WorldMapRoutingModule, CoreModule],
})
export class WorldMapModule {}
