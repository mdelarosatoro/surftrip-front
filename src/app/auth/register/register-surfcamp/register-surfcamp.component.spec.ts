import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { mockUser } from 'src/app/mocks/users.mocks';
import { AuthService } from 'src/app/services/auth.service';

import { RegisterSurfcampComponent } from './register-surfcamp.component';

describe('RegisterSurfcampComponent', () => {
    let component: RegisterSurfcampComponent;
    let fixture: ComponentFixture<RegisterSurfcampComponent>;
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
            ],
            providers: [{ provide: AuthService, useValue: mockService }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterSurfcampComponent);
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
