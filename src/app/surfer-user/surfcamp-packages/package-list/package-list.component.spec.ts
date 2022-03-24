import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { mockUser } from 'src/app/mocks/users.mocks';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { PackageListComponent } from './package-list.component';

const initialState = {
    auth: {
        id: '12345',
    },
};
describe('PackageListComponent', () => {
    let component: PackageListComponent;
    let fixture: ComponentFixture<PackageListComponent>;

    let router: Router;
    const mockRouterService = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    let activatedRoute: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    let packagesService: PackagesService;
    const mockPackageService = {
        bookPackage: jasmine.createSpy('bookPackage'),
    };
    mockPackageService.bookPackage.and.returnValue(of({ message: 'ok' }));

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampsService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageListComponent],
            imports: [HttpClientTestingModule, CoreModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: Router, useValue: mockRouterService },
                { provide: PackagesService, useValue: mockPackageService },
                { provide: SurfcampsService, useValue: mockSurfcampsService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageListComponent);
        router = TestBed.inject(Router);
        activatedRoute = TestBed.inject(ActivatedRoute);
        packagesService = TestBed.inject(PackagesService);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.surfcampsService.getSurfcampById).toHaveBeenCalled();

        expect(component.surfcamp).toEqual(getSurfcampResponse);

        component.bookPackage('1');
        expect(component.packagesService.bookPackage).toHaveBeenCalled();

        component.goToPackage('1');
        expect(component.router.navigateByUrl).toHaveBeenCalledWith(
            `/surfcamp-packages/${component.surfcamp._id}/packages/${1}`
        );
    });
});
