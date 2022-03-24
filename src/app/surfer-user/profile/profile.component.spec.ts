import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { mockUser } from 'src/app/mocks/users.mocks';
import { UsersService } from 'src/app/services/users.service';

import { ProfileComponent } from './profile.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    let usersService: UsersService;
    const mockUsersService = {
        updateUser: jasmine.createSpy('updateUser'),
    };
    mockUsersService.updateUser.and.returnValue(of(mockUser));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                FontAwesomeModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: UsersService, useValue: mockUsersService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        usersService = TestBed.inject(UsersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.editMode).toBe(false);
        component.toggleEditMode();
        expect(component.editMode).toBe(true);

        spyOn(localStorage, 'setItem');
        spyOn(component, 'toggleEditMode');
        component.updateUser();
        expect(component.usersService.updateUser).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(component.toggleEditMode).toHaveBeenCalled();
    });
});
