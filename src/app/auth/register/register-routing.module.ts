import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSurfcampComponent } from './register-surfcamp/register-surfcamp.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
    { path: 'surfcamp', component: RegisterSurfcampComponent },
    { path: 'user', component: RegisterUserComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegisterRoutingModule {}
