import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditClubTypeComponent } from './add-edit-club-type.component';

describe('AddEditClubTypeComponent', () => {
  let component: AddEditClubTypeComponent;
  let fixture: ComponentFixture<AddEditClubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditClubTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditClubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
