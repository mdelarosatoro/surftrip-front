import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { PackageDetailsComponent } from './package-details.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('PackageDetailsComponent', () => {
    let component: PackageDetailsComponent;
    let fixture: ComponentFixture<PackageDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageDetailsComponent],
            imports: [
                RouterTestingModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
