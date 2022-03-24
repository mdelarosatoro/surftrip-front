import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import {
    getSurfcampResponse,
    mockLoginSurfcampResponse,
} from 'src/app/mocks/surfcamps.mocks';
import { AuthService } from 'src/app/services/auth.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

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
    };
    mockService.loginSurfcamp.and.returnValue(of(mockLoginSurfcampResponse));

    let surfcampsService: SurfcampsService;
    const mockSurfcampService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

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
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        authService = TestBed.inject(AuthService);
        surfcampsService = TestBed.inject(SurfcampsService);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        component.loginSurfcampForm.setValue({
            userType: 'surfcamp',
            username: 'test',
            password: 'test',
        });

        component.handleSubmit();

        expect(component.authService.loginSurfcamp).toHaveBeenCalled();
    });
});
