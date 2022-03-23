import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampPackagesRoutingModule } from './surfcamp-packages-routing.module';
import { SurfcampPackagesComponent } from './surfcamp-packages.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [SurfcampPackagesComponent],
    imports: [CommonModule, SurfcampPackagesRoutingModule, CoreModule],
})
export class SurfcampPackagesModule {}
