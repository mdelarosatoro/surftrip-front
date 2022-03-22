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
        path: 'surfcamp-dashboard',
        loadChildren: () =>
            import('./surfcamp-user/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'surfcamp-packages',
        loadChildren: () =>
            import('./surfcamp-user/packages/packages.module').then(
                (m) => m.PackagesModule
            ),
    },
    {
        path: 'surfcamp-customers',
        loadChildren: () =>
            import('./surfcamp-user/customers/customers.module').then(
                (m) => m.CustomersModule
            ),
    },
    {
        path: 'surfcamp-info',
        loadChildren: () =>
            import('./surfcamp-user/info/info.module').then(
                (m) => m.InfoModule
            ),
    },
    {
        path: 'surfer-dashboard',
        loadChildren: () =>
            import('./surfer-user/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
