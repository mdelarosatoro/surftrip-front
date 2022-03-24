import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarContainerComponent } from './star-container.component';

describe('StarContainerComponent', () => {
  let component: StarContainerComponent;
  let fixture: ComponentFixture<StarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
