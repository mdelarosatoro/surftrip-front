import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackagesComponent } from './packages.component';

const routes: Routes = [
    {
        path: '',
        component: PackagesComponent,
        children: [
            {
                path: '',
                component: PackageListComponent,
            },
            {
                path: 'details/:id',
                component: PackageDetailsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PackagesRoutingModule {}
