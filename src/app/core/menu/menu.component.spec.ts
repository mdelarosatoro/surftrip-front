import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MenuComponent } from './menu.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuComponent],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
