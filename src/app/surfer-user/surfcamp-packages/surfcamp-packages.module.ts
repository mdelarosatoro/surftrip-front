import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampPackagesRoutingModule } from './surfcamp-packages-routing.module';
import { SurfcampPackagesComponent } from './surfcamp-packages.component';
import { CoreModule } from 'src/app/core/core.module';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageListComponent } from './package-list/package-list.component';

@NgModule({
    declarations: [SurfcampPackagesComponent, PackageDetailsComponent, PackageListComponent],
    imports: [CommonModule, SurfcampPackagesRoutingModule, CoreModule],
})
export class SurfcampPackagesModule {}
