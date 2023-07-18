import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInstitutesComponent } from './add-edit-institutes.component';

describe('AddEditInstitutesComponent', () => {
  let component: AddEditInstitutesComponent;
  let fixture: ComponentFixture<AddEditInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInstitutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
