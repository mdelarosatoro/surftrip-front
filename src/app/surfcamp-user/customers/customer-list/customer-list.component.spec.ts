import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CustomerListComponent } from './customer-list.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('CustomerListComponent', () => {
    let component: CustomerListComponent;
    let fixture: ComponentFixture<CustomerListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomerListComponent],
            imports: [HttpClientModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
