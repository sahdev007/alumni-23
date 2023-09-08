import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSecondaryIndustryComponent } from './add-edit-secondary-industry.component';

describe('AddEditSecondaryIndustryComponent', () => {
  let component: AddEditSecondaryIndustryComponent;
  let fixture: ComponentFixture<AddEditSecondaryIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSecondaryIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSecondaryIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
