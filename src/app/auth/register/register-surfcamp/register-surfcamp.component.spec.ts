import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { mockUser } from 'src/app/mocks/users.mocks';
import { AuthService } from 'src/app/services/auth.service';

import { RegisterSurfcampComponent } from './register-surfcamp.component';

describe('RegisterSurfcampComponent', () => {
    let component: RegisterSurfcampComponent;
    let fixture: ComponentFixture<RegisterSurfcampComponent>;

    let router: Router;
    const mockRouter = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    let authService: AuthService;
    const mockService = {
        registerSurfcamp: jasmine.createSpy('registerSurfcamp'),
    };
    mockService.registerSurfcamp.and.returnValue(of(mockUser));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterSurfcampComponent],
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
        fixture = TestBed.createComponent(RegisterSurfcampComponent);
        router = TestBed.inject(Router);
        authService = TestBed.inject(AuthService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        component.handleSubmit();

        expect(component.authService.registerSurfcamp).toHaveBeenCalled();
    });
});
describe('RegisterSurfcampComponent', () => {
    let component: RegisterSurfcampComponent;
    let fixture: ComponentFixture<RegisterSurfcampComponent>;

    let router: Router;
    const mockRouter = {
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    let authService: AuthService;
    const mockService = {
        registerSurfcamp: jasmine.createSpy('registerSurfcamp'),
    };
    mockService.registerSurfcamp.and.returnValue(
        throwError(() => new Error('Error'))
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterSurfcampComponent],
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
        fixture = TestBed.createComponent(RegisterSurfcampComponent);
        router = TestBed.inject(Router);
        authService = TestBed.inject(AuthService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        component.handleSubmit();

        expect(component.authService.registerSurfcamp).toHaveBeenCalled();
    });
});
