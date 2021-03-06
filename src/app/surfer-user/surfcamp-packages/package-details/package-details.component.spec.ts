import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { PackagesService } from 'src/app/services/packages.service';
import { SocketService } from 'src/app/services/socket.service';
import { SurfcampHelpersService } from 'src/app/services/surfcamp-helpers.service';

import { PackageDetailsComponent } from './package-details.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('PackageDetailsComponent', () => {
    let component: PackageDetailsComponent;
    let fixture: ComponentFixture<PackageDetailsComponent>;
    let activatedRoute: ActivatedRoute;

    let helpers: SurfcampHelpersService;
    const mockHelpers = {
        addLocationStringToPackage: jasmine.createSpy(
            'addLocationStringToPackage'
        ),
    };
    mockHelpers.addLocationStringToPackage.and.resolveTo(
        new Promise((res, rej) =>
            res({
                ...packageMock,
                surfcamp: {
                    ...packageMock.surfcamp,
                    locationString: 'testLocation',
                },
            })
        )
    );

    let socket: SocketService;
    const mockSocket = {
        sendBooking: jasmine.createSpy('sendBooking'),
    };

    let packagesService: PackagesService;
    const mockPackageService = {
        bookPackage: jasmine.createSpy('bookPackage'),
        getPackageById: jasmine.createSpy('getPackageById'),
    };
    mockPackageService.bookPackage.and.returnValue(of({ message: 'success' }));
    mockPackageService.getPackageById.and.returnValue(of(packageMock));

    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageDetailsComponent],
            imports: [HttpClientTestingModule, CoreModule, RouterTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: PackagesService, useValue: mockPackageService },
                { provide: SocketService, useValue: mockSocket },
                { provide: SurfcampHelpersService, useValue: mockHelpers },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageDetailsComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);
        packagesService = TestBed.inject(PackagesService);
        helpers = TestBed.inject(SurfcampHelpersService);
        socket = TestBed.inject(SocketService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.package).toEqual(packageMock);

        component.bookPackage('1');
        expect(component.packagesService.bookPackage).toHaveBeenCalled();
        expect(component.successBookMessage).toEqual({
            state: true,
            package: packageMock._id,
        });
    });
});
