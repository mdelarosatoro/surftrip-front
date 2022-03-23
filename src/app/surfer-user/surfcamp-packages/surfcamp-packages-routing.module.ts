import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampPackagesComponent } from './surfcamp-packages.component';

const routes: Routes = [{ path: '', component: SurfcampPackagesComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampPackagesRoutingModule {}
