import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTypeComponent } from './gallery-type.component';

describe('GalleryTypeComponent', () => {
  let component: GalleryTypeComponent;
  let fixture: ComponentFixture<GalleryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
