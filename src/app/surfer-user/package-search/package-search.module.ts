import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageSearchRoutingModule } from './package-search-routing.module';
import { PackageSearchComponent } from './package-search.component';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PackageSearchComponent, FilterComponent],
    imports: [
        CommonModule,
        PackageSearchRoutingModule,
        CoreModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class PackageSearchModule {}
