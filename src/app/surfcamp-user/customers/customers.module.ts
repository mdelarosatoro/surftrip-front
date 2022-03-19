import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [CustomersComponent, CustomerListComponent],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        CoreModule,
        FontAwesomeModule,
    ],
})
export class CustomersModule {}
