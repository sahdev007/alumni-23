import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFunctionComponent } from './add-edit-function.component';

describe('AddEditFunctionComponent', () => {
  let component: AddEditFunctionComponent;
  let fixture: ComponentFixture<AddEditFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
