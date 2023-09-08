import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrimaryFunctionComponent } from './add-edit-primary-function.component';

describe('AddEditPrimaryFunctionComponent', () => {
  let component: AddEditPrimaryFunctionComponent;
  let fixture: ComponentFixture<AddEditPrimaryFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrimaryFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrimaryFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
