import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { PackageListComponent } from './package-list.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: {
        packages: [{ name: 'test' }],
    },
};

describe('PackageListComponent', () => {
    let component: PackageListComponent;
    let fixture: ComponentFixture<PackageListComponent>;

    let route: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    let packagesService: PackagesService;
    const mockPackageService = {
        getAllPackages: jasmine.createSpy('getAllPackages'),
    };
    mockPackageService.getAllPackages.and.returnValue(of([packageMock]));

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
            imports: [CoreModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: PackagesService, useValue: mockPackageService },
                { provide: SurfcampsService, useValue: mockSurfcampsService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageListComponent);
        route = TestBed.inject(ActivatedRoute);
        packagesService = TestBed.inject(PackagesService);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
