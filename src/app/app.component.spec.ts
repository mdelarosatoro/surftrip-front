import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { of } from 'rxjs';
import {
    getSurfcampResponse,
    mockLoginSurfcampResponse,
} from './mocks/surfcamps.mocks';
import { SurfcampsService } from './services/surfcamps.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreModule } from './core/core.module';
import { SocketService } from './services/socket.service';

const initialState = {
    auth: {
        id: '12345',
    },
};

const mockNotification = {
    surfcampId: '6230ded0b4bb4b716a3d1163',
    packageId: '123',
    userId: '123456',
};

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    let socket: SocketService;
    const mockSocket = {
        getBookingNotification: jasmine.createSpy('getBookingNotification'),
    };
    mockSocket.getBookingNotification.and.returnValue(of(mockNotification));

    let authService: AuthService;
    const mockService = {
        loginToken: jasmine.createSpy('loginToken'),
    };
    mockService.loginToken.and.returnValue(of(mockLoginSurfcampResponse));

    let surfcampsService: SurfcampsService;
    const mockSurfcampService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, CoreModule],
            declarations: [AppComponent],
            providers: [
                provideMockStore({ initialState }),
                { provide: AuthService, useValue: mockService },
                { provide: SocketService, useValue: mockSocket },
                { provide: SurfcampsService, useValue: mockSurfcampService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        authService = TestBed.inject(AuthService);
        surfcampsService = TestBed.inject(SurfcampsService);
        socket = TestBed.inject(SocketService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();

        spyOn(localStorage, 'getItem').and.returnValue('12345');

        expect(component.authService.loginToken).toHaveBeenCalled();
        expect(component.surfcampsService.getSurfcampById).toHaveBeenCalled();
        expect(component.notification).toEqual(
            `Your package ${mockNotification.packageId} was booked by User ${mockNotification.userId}`
        );
        expect(component.notificationState).toBe(true);
    });
});
