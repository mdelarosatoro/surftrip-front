import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import {
    getSurfcampResponse,
    mockSurfcampPopulatedComments,
} from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { ReviewsComponent } from './reviews.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('ReviewsComponent', () => {
    let component: ReviewsComponent;
    let fixture: ComponentFixture<ReviewsComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        getSurfcampCommentsById: jasmine.createSpy('getSurfcampCommentsById'),
    };
    mockSurfcampsService.getSurfcampCommentsById.and.returnValue(
        of(mockSurfcampPopulatedComments.comments)
    );

    let activatedRoute: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReviewsComponent],
            imports: [
                HttpClientTestingModule,
                CoreModule,
                RouterTestingModule,
                FontAwesomeModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
                { provide: ActivatedRoute, useValue: mockRoute },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewsComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        const expectedComments = [
            {
                user: {
                    _id: '6230dee9b4bb4b716a3d116a',
                    bookings: [
                        {
                            package: {
                                _id: '6230dedcb4bb4b716a3d1167',
                                surfcamp: '6230ded0b4bb4b716a3d1163',
                                icon: 'https://cdn-icons-png.flaticon.com/512/157/157796.png',
                                description:
                                    'blalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbabla',
                                days: 10,
                                price: 700,
                                name: '10 nights FREEEEEESHHHisne',
                            },
                            bookedAt: '2022-03-23T14:55:39.373Z',
                            _id: '623b34eb6ea9a370925d9e2a',
                        },
                    ],
                    role: 'user',
                    lastName: 'testingtimes',
                    name: 'testingtimes',
                    username: 'test1',
                    email: 'testingtimes@testingtimes.com',
                    profilePicUrl:
                        'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg',
                },
                comment: 'Very nice',
                rating: 3,
                _id: '6231c1d89f67d5fca6ba1c8d',
                starArr: [1, 1, 1],
                emptyStarArr: [1, 1],
            },
        ];

        expect(
            component.surfcampsService.getSurfcampCommentsById
        ).toHaveBeenCalled();

        expect(component.comments).toEqual(expectedComments);
    });
});
