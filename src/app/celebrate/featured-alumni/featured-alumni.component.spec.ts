import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAlumniComponent } from './featured-alumni.component';

describe('FeaturedAlumniComponent', () => {
  let component: FeaturedAlumniComponent;
  let fixture: ComponentFixture<FeaturedAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
