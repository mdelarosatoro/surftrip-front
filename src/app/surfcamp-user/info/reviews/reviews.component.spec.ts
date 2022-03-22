import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { mockUser } from 'src/app/mocks/users.mocks';
import { UsersService } from 'src/app/services/users.service';

import { ReviewsComponent } from './reviews.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: getSurfcampResponse,
};

describe('ReviewsComponent', () => {
    let component: ReviewsComponent;
    let fixture: ComponentFixture<ReviewsComponent>;
    let usersService: UsersService;
    const mockService = {
        getAll: jasmine.createSpy('getAll'),
    };
    mockService.getAll.and.returnValue(of([mockUser]));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReviewsComponent],
            imports: [HttpClientTestingModule, CoreModule, FontAwesomeModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: UsersService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewsComponent);
        usersService = TestBed.inject(UsersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        const expectedComments = [
            {
                user: {
                    _id: '6230dee9b4bb4b716a3d116a',
                    bookings: ['6230dedcb4bb4b716a3d1167'],
                    role: 'user',
                    lastName: 'test',
                    name: 'test',
                    username: 'test1',
                    email: 'test1@test.com',
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
        expect(component.comments).toEqual(expectedComments);
    });
});
