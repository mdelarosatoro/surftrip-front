import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [BookingsComponent],
    imports: [CommonModule, BookingsRoutingModule, CoreModule],
})
export class BookingsModule {}
