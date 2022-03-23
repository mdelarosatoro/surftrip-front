import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcampReviewsComponent } from './surfcamp-reviews.component';

describe('SurfcampReviewsComponent', () => {
  let component: SurfcampReviewsComponent;
  let fixture: ComponentFixture<SurfcampReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfcampReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfcampReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
