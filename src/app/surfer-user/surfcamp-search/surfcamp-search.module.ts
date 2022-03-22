import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfcampSearchRoutingModule } from './surfcamp-search-routing.module';
import { SurfcampSearchComponent } from './surfcamp-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [SurfcampSearchComponent, FilterComponent],
    imports: [
        CommonModule,
        SurfcampSearchRoutingModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
    ],
})
export class SurfcampSearchModule {}
