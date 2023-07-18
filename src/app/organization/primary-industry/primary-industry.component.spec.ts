import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryIndustryComponent } from './primary-industry.component';

describe('PrimaryIndustryComponent', () => {
  let component: PrimaryIndustryComponent;
  let fixture: ComponentFixture<PrimaryIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
