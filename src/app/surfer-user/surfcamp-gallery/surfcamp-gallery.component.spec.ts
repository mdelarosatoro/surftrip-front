import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcampGalleryComponent } from './surfcamp-gallery.component';

describe('SurfcampGalleryComponent', () => {
  let component: SurfcampGalleryComponent;
  let fixture: ComponentFixture<SurfcampGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfcampGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfcampGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
