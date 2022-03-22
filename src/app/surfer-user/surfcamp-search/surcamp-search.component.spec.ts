import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurcampSearchComponent } from './surcamp-search.component';

describe('SurcampSearchComponent', () => {
  let component: SurcampSearchComponent;
  let fixture: ComponentFixture<SurcampSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurcampSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurcampSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
