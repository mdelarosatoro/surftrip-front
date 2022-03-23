import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageSearchComponent } from './package-search.component';

const routes: Routes = [{ path: '', component: PackageSearchComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PackageSearchRoutingModule {}
