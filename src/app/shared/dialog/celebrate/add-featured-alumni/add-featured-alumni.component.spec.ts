import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeaturedAlumniComponent } from './add-featured-alumni.component';

describe('AddFeaturedAlumniComponent', () => {
  let component: AddFeaturedAlumniComponent;
  let fixture: ComponentFixture<AddFeaturedAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeaturedAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeaturedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
