import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurfcampGalleryComponent } from './surfcamp-gallery.component';

const routes: Routes = [{ path: '', component: SurfcampGalleryComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SurfcampGalleryRoutingModule {}
