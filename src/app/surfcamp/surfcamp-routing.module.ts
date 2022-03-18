import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampComponent } from './surfcamp.component';

const routes: Routes = [{ path: '', component: SurfcampComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampRoutingModule {}
