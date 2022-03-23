import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageListComponent } from './package-list/package-list.component';
import { SurfcampPackagesComponent } from './surfcamp-packages.component';

const routes: Routes = [
    { path: '', component: PackageListComponent },
    { path: 'packages/:idPackage', component: PackageDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampPackagesRoutingModule {}
