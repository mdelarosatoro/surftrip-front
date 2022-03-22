import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import { provideMockStore } from '@ngrx/store/testing';
import { LayoutComponent } from './layout.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutComponent],
            imports: [CoreModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('Should set the menuState to the new state passed', () => {
        component.toggleMenu(true);
        expect(component.menuState).toBeTruthy();
    });
});
