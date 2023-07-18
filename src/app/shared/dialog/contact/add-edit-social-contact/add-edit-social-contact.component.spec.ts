import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSocialContactComponent } from './add-edit-social-contact.component';

describe('AddEditSocialContactComponent', () => {
  let component: AddEditSocialContactComponent;
  let fixture: ComponentFixture<AddEditSocialContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSocialContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSocialContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
