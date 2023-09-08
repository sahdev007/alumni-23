import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditJobTypeComponent } from './add-edit-job-type.component';

describe('AddEditJobTypeComponent', () => {
  let component: AddEditJobTypeComponent;
  let fixture: ComponentFixture<AddEditJobTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditJobTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditJobTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
