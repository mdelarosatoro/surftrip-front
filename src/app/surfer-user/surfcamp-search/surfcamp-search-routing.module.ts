import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampSearchComponent } from './surfcamp-search.component';

const routes: Routes = [{ path: '', component: SurfcampSearchComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampSearchRoutingModule {}
