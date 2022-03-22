import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcampSearchComponent } from './surfcamp-search.component';

describe('SurcampSearchComponent', () => {
    let component: SurfcampSearchComponent;
    let fixture: ComponentFixture<SurfcampSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampSearchComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
