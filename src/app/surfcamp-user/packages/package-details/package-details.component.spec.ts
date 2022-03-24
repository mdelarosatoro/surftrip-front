import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { PackagesService } from 'src/app/services/packages.service';

import { PackageDetailsComponent } from './package-details.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: getSurfcampResponse,
};

describe('PackageDetailsComponent', () => {
    let component: PackageDetailsComponent;
    let fixture: ComponentFixture<PackageDetailsComponent>;
    const routeStub = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    routeStub.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    let packagesService: PackagesService;
    const mockService = {
        updatePackage: jasmine.createSpy('updatePackage'),
    };
    mockService.updatePackage.and.returnValue(of(packageMock));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageDetailsComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
                CoreModule,
                FontAwesomeModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: routeStub },
                { provide: PackagesService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageDetailsComponent);
        packagesService = TestBed.inject(PackagesService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const route = fixture.debugElement.injector.get(ActivatedRoute);

        expect(component).toBeTruthy();
        expect(route.snapshot.paramMap.get).toHaveBeenCalled();

        component.toggleEditMode();
        expect(component.editMode).toBe(true);

        component.savePackage();
        expect(component.editMode).toBe(false);
    });
});
