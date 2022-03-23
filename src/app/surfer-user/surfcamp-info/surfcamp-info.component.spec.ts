import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcampInfoComponent } from './surfcamp-info.component';

describe('SurfcampInfoComponent', () => {
  let component: SurfcampInfoComponent;
  let fixture: ComponentFixture<SurfcampInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfcampInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfcampInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
