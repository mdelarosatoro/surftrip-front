import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { mockUser } from 'src/app/mocks/users.mocks';
import { AuthService } from 'src/app/services/auth.service';

import { RegisterUserComponent } from './register-user.component';

describe('RegisterUserComponent', () => {
    let component: RegisterUserComponent;
    let fixture: ComponentFixture<RegisterUserComponent>;

    let router: Router;
    const mockRouter = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    let authService: AuthService;
    const mockService = {
        registerUser: jasmine.createSpy('registerUser'),
    };
    mockService.registerUser.and.returnValue(of(mockUser));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterUserComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                CoreModule,
                RouterTestingModule,
            ],
            providers: [
                { provide: AuthService, useValue: mockService },
                { provide: Router, useValue: mockRouter },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterUserComponent);
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        component.handleSubmit();
        expect(component.authService.registerUser).toHaveBeenCalled();
        expect(component.router.navigateByUrl).toHaveBeenCalledOnceWith(
            '/login'
        );
    });
});
describe('RegisterUserComponent', () => {
    let component: RegisterUserComponent;
    let fixture: ComponentFixture<RegisterUserComponent>;

    let router: Router;
    const mockRouter = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    let authService: AuthService;
    const mockService = {
        registerUser: jasmine.createSpy('registerUser'),
    };
    mockService.registerUser.and.returnValue(
        throwError(() => new Error('Error'))
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterUserComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                CoreModule,
                RouterTestingModule,
            ],
            providers: [
                { provide: AuthService, useValue: mockService },
                { provide: Router, useValue: mockRouter },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterUserComponent);
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        component.handleSubmit();
        expect(component.authService.registerUser).toHaveBeenCalled();
        expect(component.router.navigateByUrl).toHaveBeenCalledOnceWith(
            '/login'
        );
    });
});
