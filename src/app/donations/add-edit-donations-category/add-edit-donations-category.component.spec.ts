import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDonationsCategoryComponent } from './add-edit-donations-category.component';

describe('AddEditDonationsCategoryComponent', () => {
  let component: AddEditDonationsCategoryComponent;
  let fixture: ComponentFixture<AddEditDonationsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDonationsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDonationsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
