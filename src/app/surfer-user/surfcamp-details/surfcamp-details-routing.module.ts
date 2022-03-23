import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampDetailsComponent } from './surfcamp-details.component';

const routes: Routes = [{ path: '', component: SurfcampDetailsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampDetailsRoutingModule {}
