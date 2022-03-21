import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

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

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
            ],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // describe('When handleSubmit is called with a valid form', () => {
    //     it('Should call the api and change the state', () => {
    //         spyOn(component.authService, 'login').and.returnValue(
    //             of({
    //                 token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzBkZWQwYjRiYjRiNzE2YTNkMTE2MyIsIm5hbWUiOiJ0ZXN0MSIsInVzZXJuYW1lIjoidGVzdDEiLCJyb2xlIjoic3VyZmNhbXAiLCJpYXQiOjE2NDc2MDY4NTF9.unyOCEWPGuv4gG672Y7qTS8grXm_6rlIOjC-H2kmQXk',
    //                 id: '6230ded0b4bb4b716a3d1163',
    //                 name: 'test1',
    //                 username: 'test1',
    //                 role: 'surfcamp',
    //             } as any)
    //         );
    //     })
    // })
});
