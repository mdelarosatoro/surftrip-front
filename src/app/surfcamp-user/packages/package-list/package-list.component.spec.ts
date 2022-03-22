import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { PackageListComponent } from './package-list.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('PackageListComponent', () => {
    let component: PackageListComponent;
    let fixture: ComponentFixture<PackageListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageListComponent],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
