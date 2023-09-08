import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGalleryTypeComponent } from './add-edit-gallery-type.component';

describe('AddEditGalleryTypeComponent', () => {
  let component: AddEditGalleryTypeComponent;
  let fixture: ComponentFixture<AddEditGalleryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGalleryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGalleryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
