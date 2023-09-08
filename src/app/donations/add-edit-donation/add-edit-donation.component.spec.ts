import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDonationComponent } from './add-edit-donation.component';

describe('AddEditDonationComponent', () => {
  let component: AddEditDonationComponent;
  let fixture: ComponentFixture<AddEditDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
