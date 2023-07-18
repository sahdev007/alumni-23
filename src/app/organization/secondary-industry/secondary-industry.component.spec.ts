import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryIndustryComponent } from './secondary-industry.component';

describe('SecondaryIndustryComponent', () => {
  let component: SecondaryIndustryComponent;
  let fixture: ComponentFixture<SecondaryIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
