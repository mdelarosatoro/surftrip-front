import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [PackagesComponent],
    imports: [CommonModule, PackagesRoutingModule, FontAwesomeModule],
})
export class PackagesModule {}
