import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { mockUser } from 'src/app/mocks/users.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { SurfcampSearchComponent } from './surfcamp-search.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: mockUser,
};

describe('SurfcampSearchComponent', () => {
    let component: SurfcampSearchComponent;
    let fixture: ComponentFixture<SurfcampSearchComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        getAllSurfcamps: jasmine.createSpy('getAllSurfcamps'),
    };
    mockSurfcampsService.getAllSurfcamps.and.returnValue(
        of([getSurfcampResponse])
    );

    let router: Router;
    const mockRouterService = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampSearchComponent],
            imports: [HttpClientTestingModule, FontAwesomeModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampSearchComponent);
        router = TestBed.inject(Router);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.surfampsService.getAllSurfcamps).toHaveBeenCalled();

        expect(component.filterState).toBe(false);
        component.toggleFilter();
        expect(component.filterState).toBe(true);

        component.handleFilter([getSurfcampResponse]);
        component.goToDetails('1');
        expect(component.router.navigateByUrl).toHaveBeenCalledWith(
            `/surfcamp-details/1`
        );
    });
});
