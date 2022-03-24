import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { AddReviewComponent } from './add-review.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('AddReviewComponent', () => {
    let component: AddReviewComponent;
    let fixture: ComponentFixture<AddReviewComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        addComment: jasmine.createSpy('addComment'),
    };
    mockSurfcampsService.addComment.and.returnValue(
        of(getSurfcampResponse.comments)
    );

    let location: Location;
    const mockLocation = {
        back: jasmine.createSpy('back'),
    };

    let route: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddReviewComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                FontAwesomeModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: Location, useValue: mockLocation },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddReviewComponent);
        route = TestBed.inject(ActivatedRoute);
        location = TestBed.inject(Location);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.route.snapshot.paramMap.get).toHaveBeenCalled();

        component.handleSubmit();
        expect(component.surfcampsService.addComment).toHaveBeenCalled();
        expect(component.location.back).toHaveBeenCalled();

        component.addReviewForm.setValue({ comment: '', rating: 1 });
        component.setRating(1);
        expect(component.addReviewForm.value.rating).toBe(0);

        component.setRating(1);
        expect(component.addReviewForm.value.rating).toBe(1);
    });
});
