import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeaturedAlumniComponent } from './create-featured-alumni.component';

describe('CreateFeaturedAlumniComponent', () => {
  let component: CreateFeaturedAlumniComponent;
  let fixture: ComponentFixture<CreateFeaturedAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFeaturedAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeaturedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
