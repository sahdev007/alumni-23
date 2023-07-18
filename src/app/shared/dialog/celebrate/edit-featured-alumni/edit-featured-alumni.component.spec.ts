import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeaturedAlumniComponent } from './edit-featured-alumni.component';

describe('EditFeaturedAlumniComponent', () => {
  let component: EditFeaturedAlumniComponent;
  let fixture: ComponentFixture<EditFeaturedAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFeaturedAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeaturedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
