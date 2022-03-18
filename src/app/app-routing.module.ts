import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'register',
        loadChildren: () =>
            import('./auth/register/register.module').then(
                (m) => m.RegisterModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'surfcamp-user',
        loadChildren: () =>
            import('./surfcamp/surfcamp.module').then((m) => m.SurfcampModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
