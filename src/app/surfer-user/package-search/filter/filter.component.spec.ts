import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { PackagesService } from 'src/app/services/packages.service';

import { FilterComponent } from './filter.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    let packagesService: PackagesService;
    const mockPackageService = {
        search: jasmine.createSpy('search'),
    };
    mockPackageService.search.and.returnValue(of([packageMock]));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilterComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                FontAwesomeModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: PackagesService, useValue: mockPackageService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        packagesService = TestBed.inject(PackagesService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        component.filterForm.setValue({
            ...component.filterForm.value,
            rating: 2,
        });
        component.setMinRating(2);
        expect(component.filterForm.value.rating).toEqual(0);

        component.setMinRating(2);
        expect(component.filterForm.value.rating).toEqual(2);

        component.handleSubmit();
        expect(component.packagesService.search).toHaveBeenCalled();
    });
});
