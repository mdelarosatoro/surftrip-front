import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [InfoComponent, InfoListComponent],
    imports: [CommonModule, InfoRoutingModule, CoreModule],
})
export class InfoModule {}
