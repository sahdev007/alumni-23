import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKeyContactComponent } from './add-edit-key-contact.component';

describe('AddEditKeyContactComponent', () => {
  let component: AddEditKeyContactComponent;
  let fixture: ComponentFixture<AddEditKeyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKeyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKeyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
