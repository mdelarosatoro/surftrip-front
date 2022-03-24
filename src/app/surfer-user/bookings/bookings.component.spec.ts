import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { mockUser } from 'src/app/mocks/users.mocks';
import { UsersService } from 'src/app/services/users.service';

import { BookingsComponent } from './bookings.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: mockUser,
};

describe('BookingsComponent', () => {
    let component: BookingsComponent;
    let fixture: ComponentFixture<BookingsComponent>;

    let usersService: UsersService;
    const mockUsersService = {
        getUserById: jasmine.createSpy('getUserById'),
    };
    mockUsersService.getUserById.and.returnValue(of(mockUser));

    let router: Router;
    const mockRouterService = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookingsComponent],
            imports: [HttpClientTestingModule, CoreModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: UsersService, useValue: mockUsersService },
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookingsComponent);
        router = TestBed.inject(Router);
        usersService = TestBed.inject(UsersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.usersService.getUserById).toHaveBeenCalled();

        component.goToPackage('1', '2');
        expect(component.router.navigateByUrl).toHaveBeenCalledWith(
            `/surfcamp-packages/2/packages/1`
        );
    });
});
