import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoListComponent } from './info-list/info-list.component';

const routes: Routes = [{ path: '', component: InfoListComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
