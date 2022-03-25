import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

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
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-packages',
        loadChildren: () =>
            import('./surfcamp-user/packages/packages.module').then(
                (m) => m.PackagesModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-customers',
        loadChildren: () =>
            import('./surfcamp-user/customers/customers.module').then(
                (m) => m.CustomersModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-info',
        loadChildren: () =>
            import('./surfcamp-user/info/info.module').then(
                (m) => m.InfoModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfer-dashboard',
        loadChildren: () =>
            import('./surfer-user/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-search',
        loadChildren: () =>
            import('./surfer-user/surfcamp-search/surfcamp-search.module').then(
                (m) => m.SurfcampSearchModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'package-search',
        loadChildren: () =>
            import('./surfer-user/package-search/package-search.module').then(
                (m) => m.PackageSearchModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-details/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-details/surfcamp-details.module'
            ).then((m) => m.SurfcampDetailsModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-packages/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-packages/surfcamp-packages.module'
            ).then((m) => m.SurfcampPackagesModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-reviews/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-reviews/surfcamp-reviews.module'
            ).then((m) => m.SurfcampReviewsModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-gallery/:id',
        loadChildren: () =>
            import(
                './surfer-user/surfcamp-gallery/surfcamp-gallery.module'
            ).then((m) => m.SurfcampGalleryModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfcamp-info/:id',
        loadChildren: () =>
            import('./surfer-user/surfcamp-info/surfcamp-info.module').then(
                (m) => m.SurfcampInfoModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfer/profile',
        loadChildren: () =>
            import('./surfer-user/profile/profile.module').then(
                (m) => m.ProfileModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'surfer/bookings',
        loadChildren: () =>
            import('./surfer-user/bookings/bookings.module').then(
                (m) => m.BookingsModule
            ),
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
