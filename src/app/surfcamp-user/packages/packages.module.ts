import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageListComponent } from './package-list/package-list.component';

@NgModule({
    declarations: [PackagesComponent, PackageDetailsComponent, PackageListComponent],
    imports: [CommonModule, PackagesRoutingModule, FontAwesomeModule],
})
export class PackagesModule {}
