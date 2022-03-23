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
    {
        path: 'surfcamp-search',
        loadChildren: () =>
            import('./surfer-user/surfcamp-search/surfcamp-search.module').then(
                (m) => m.SurfcampSearchModule
            ),
    },
    {
        path: 'surfcamp-details/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-details/surfcamp-details.module'
            ).then((m) => m.SurfcampDetailsModule),
    },
    {
        path: 'surfcamp-packages/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-packages/surfcamp-packages.module'
            ).then((m) => m.SurfcampPackagesModule),
    },
    {
        path: 'surfcamp-reviews/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-reviews/surfcamp-reviews.module'
            ).then((m) => m.SurfcampReviewsModule),
    },
    {
        path: 'surfcamp-gallery/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-gallery/surfcamp-gallery.module'
            ).then((m) => m.SurfcampGalleryModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
