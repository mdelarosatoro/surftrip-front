import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MenuDesktopComponent } from './menu-desktop.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('MenuDesktopComponent', () => {
    let component: MenuDesktopComponent;
    let fixture: ComponentFixture<MenuDesktopComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuDesktopComponent],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuDesktopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        spyOn(localStorage, 'removeItem');

        component.logout();
        expect(localStorage.removeItem).toHaveBeenCalled();
    });
});
