import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrimaryIndustryComponent } from './add-edit-primary-industry.component';

describe('AddEditPrimaryIndustryComponent', () => {
  let component: AddEditPrimaryIndustryComponent;
  let fixture: ComponentFixture<AddEditPrimaryIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrimaryIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrimaryIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
