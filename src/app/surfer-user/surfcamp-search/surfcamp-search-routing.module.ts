import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurcampSearchComponent } from './surcamp-search.component';

const routes: Routes = [{ path: '', component: SurcampSearchComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampSearchRoutingModule {}
