import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of, throwError } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import {
    getSurfcampResponse,
    mockLoginSurfcampResponse,
} from 'src/app/mocks/surfcamps.mocks';
import { mockUser, mockUserLoginResponse } from 'src/app/mocks/users.mocks';
import { AuthService } from 'src/app/services/auth.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { UsersService } from 'src/app/services/users.service';

import { LoginComponent } from './login.component';

const initialState = {
    auth: {
        token: '',
        id: '',
        name: '',
        username: '',
        role: '',
    },
};

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    let authService: AuthService;
    const mockService = {
        loginSurfcamp: jasmine.createSpy('loginSurfcamp'),
        loginUser: jasmine.createSpy('loginUser'),
    };
    mockService.loginSurfcamp.and.returnValue(of(mockLoginSurfcampResponse));
    mockService.loginUser.and.returnValue(of(mockUserLoginResponse));

    let surfcampsService: SurfcampsService;
    const mockSurfcampService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

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
            declarations: [LoginComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: AuthService, useValue: mockService },
                { provide: SurfcampsService, useValue: mockSurfcampService },
                { provide: UsersService, useValue: mockUsersService },
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        authService = TestBed.inject(AuthService);
        surfcampsService = TestBed.inject(SurfcampsService);
        usersService = TestBed.inject(UsersService);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create With userType surfcamp', () => {
        expect(component).toBeTruthy();

        component.loginSurfcampForm.setValue({
            userType: 'surfcamp',
            username: 'test',
            password: 'test',
        });

        component.handleSubmit();

        expect(component.authService.loginSurfcamp).toHaveBeenCalled();
        expect(component.surfcampsService.getSurfcampById).toHaveBeenCalled();
    });
    it('should create With userType surfer', () => {
        expect(component).toBeTruthy();

        component.loginSurfcampForm.setValue({
            userType: 'surfer',
            username: 'test',
            password: 'test',
        });

        component.handleSubmit();

        expect(component.authService.loginUser).toHaveBeenCalled();
        expect(component.usersService.getUserById).toHaveBeenCalled();
    });
});
describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    let authService: AuthService;
    const mockService = {
        loginSurfcamp: jasmine.createSpy('loginSurfcamp'),
        loginUser: jasmine.createSpy('loginUser'),
    };
    mockService.loginSurfcamp.and.returnValue(
        throwError(() => new Error('Error'))
    );
    mockService.loginUser.and.returnValue(throwError(() => new Error('Error')));

    let surfcampsService: SurfcampsService;
    const mockSurfcampService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

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
            declarations: [LoginComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: AuthService, useValue: mockService },
                { provide: SurfcampsService, useValue: mockSurfcampService },
                { provide: UsersService, useValue: mockUsersService },
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        authService = TestBed.inject(AuthService);
        surfcampsService = TestBed.inject(SurfcampsService);
        usersService = TestBed.inject(UsersService);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create With userType surfcamp', () => {
        expect(component).toBeTruthy();

        component.loginSurfcampForm.setValue({
            userType: 'surfcamp',
            username: 'test',
            password: 'test',
        });

        component.handleSubmit();

        expect(component.authService.loginSurfcamp).toHaveBeenCalled();
        expect(component.surfcampsService.getSurfcampById).toHaveBeenCalled();
    });
    it('should create With userType surfer', () => {
        expect(component).toBeTruthy();

        component.loginSurfcampForm.setValue({
            userType: 'surfer',
            username: 'test',
            password: 'test',
        });

        component.handleSubmit();

        expect(component.authService.loginUser).toHaveBeenCalled();
        expect(component.usersService.getUserById).toHaveBeenCalled();
    });
});
