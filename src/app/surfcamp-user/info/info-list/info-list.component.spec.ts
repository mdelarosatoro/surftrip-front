import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { InfoListComponent } from './info-list.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: {},
};

describe('InfoListComponent', () => {
    let component: InfoListComponent;
    let fixture: ComponentFixture<InfoListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoListComponent],
            imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
