import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcampComponent } from './surfcamp.component';

describe('SurfcampComponent', () => {
  let component: SurfcampComponent;
  let fixture: ComponentFixture<SurfcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
