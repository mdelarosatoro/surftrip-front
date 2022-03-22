import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcampDetailsComponent } from './surfcamp-details.component';

describe('SurfcampDetailsComponent', () => {
  let component: SurfcampDetailsComponent;
  let fixture: ComponentFixture<SurfcampDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfcampDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfcampDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
