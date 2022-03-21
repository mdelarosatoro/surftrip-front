import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { GalleryComponent } from './gallery.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GalleryComponent],
            imports: [HttpClientModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
