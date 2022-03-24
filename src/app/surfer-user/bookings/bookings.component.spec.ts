import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { mockUser } from 'src/app/mocks/users.mocks';

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

    let router: Router;
    const mockRouterService = {
        nagivateByUrl: jasmine.createSpy('nagivateByUrl'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookingsComponent],
            imports: [HttpClientTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookingsComponent);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
