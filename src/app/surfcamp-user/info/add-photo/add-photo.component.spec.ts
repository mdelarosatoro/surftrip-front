import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { AddPhotoComponent } from './add-photo.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('AddPhotoComponent', () => {
    let component: AddPhotoComponent;
    let fixture: ComponentFixture<AddPhotoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddPhotoComponent],
            imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
