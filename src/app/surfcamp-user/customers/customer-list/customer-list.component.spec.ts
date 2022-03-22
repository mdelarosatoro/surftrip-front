import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
            imports: [HttpClientTestingModule, CoreModule],
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
                package: {
                    _id: '6230dedcb4bb4b716a3d1167',
                    icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                    description: 'blalbablablalbablablalbabla',
                    days: 5,
                    price: 499,
                    name: '5 days all included',
                },
            },
        ];

        expect(component).toBeTruthy();
        expect(component.customers).toEqual(expectedCustomers);
    });
});
