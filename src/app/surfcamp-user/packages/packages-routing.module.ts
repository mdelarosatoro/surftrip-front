import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePackageComponent } from './create-package/create-package.component';
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
            {
                path: 'create',
                component: CreatePackageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PackagesRoutingModule {}
