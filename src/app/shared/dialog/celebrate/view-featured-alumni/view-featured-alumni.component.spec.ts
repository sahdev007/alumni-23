import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeaturedAlumniComponent } from './view-featured-alumni.component';

describe('ViewFeaturedAlumniComponent', () => {
  let component: ViewFeaturedAlumniComponent;
  let fixture: ComponentFixture<ViewFeaturedAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeaturedAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeaturedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
