import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { FilterComponent } from './filter.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        search: jasmine.createSpy('search'),
    };
    mockSurfcampsService.search.and.returnValue(of(getSurfcampResponse));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilterComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                FontAwesomeModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        component.filterForm.setValue({
            ...component.filterForm.value,
            rating: 1,
        });
        component.setMinRating(1);
        expect(component.filterForm.value.rating).toEqual(0);
        component.setMinRating(1);
        expect(component.filterForm.value.rating).toEqual(1);

        component.handleSubmit();
        expect(component.surfcampsService.search).toHaveBeenCalled();
    });
});
