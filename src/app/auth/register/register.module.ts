import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { RegisterSurfcampComponent } from './register-surfcamp/register-surfcamp.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
    declarations: [RegisterComponent, RegisterSurfcampComponent, RegisterUserComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
    ],
})
export class RegisterModule {}
