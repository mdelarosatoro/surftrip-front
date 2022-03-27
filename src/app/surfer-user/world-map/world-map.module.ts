import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldMapRoutingModule } from './world-map-routing.module';
import { WorldMapComponent } from './world-map.component';

@NgModule({
    declarations: [WorldMapComponent],
    imports: [CommonModule, WorldMapRoutingModule],
})
export class WorldMapModule {}
