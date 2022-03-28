import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { mockUser } from 'src/app/mocks/users.mocks';
import { UsersService } from 'src/app/services/users.service';

import { CustomerListComponent } from './customer-list.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: getSurfcampResponse,
};

describe('CustomerListComponent', () => {
    let component: CustomerListComponent;
    let fixture: ComponentFixture<CustomerListComponent>;
    let usersService: UsersService;
    const mockService = {
        getAll: jasmine.createSpy('getAll'),
    };
    mockService.getAll.and.returnValue(of([mockUser]));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomerListComponent],
            imports: [HttpClientTestingModule, CoreModule, RouterTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: UsersService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerListComponent);
        usersService = TestBed.inject(UsersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const expectedCustomers = [
            {
                bookedAt: '01/01/1234 00:00',
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
                package: {
                    _id: '6230dedcb4bb4b716a3d1167',
                    icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                    description: 'blalbablablalbablablalbabla',
                    days: 5,
                    price: 499,
                    name: '5 days all included',
                    surfcamp: {},
                },
            },
        ];

        expect(component).toBeTruthy();
        console.log(component.customers);
        expect(component.customers).toEqual(expectedCustomers);
    });
});
