import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSecondaryFunctionComponent } from './add-edit-secondary-function.component';

describe('AddEditSecondaryFunctionComponent', () => {
  let component: AddEditSecondaryFunctionComponent;
  let fixture: ComponentFixture<AddEditSecondaryFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSecondaryFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSecondaryFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
