import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ReviewsComponent } from './reviews.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('ReviewsComponent', () => {
    let component: ReviewsComponent;
    let fixture: ComponentFixture<ReviewsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReviewsComponent],
            imports: [HttpClientModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
