import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampInfoComponent } from './surfcamp-info.component';

const routes: Routes = [{ path: '', component: SurfcampInfoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampInfoRoutingModule {}
