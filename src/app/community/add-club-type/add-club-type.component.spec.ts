import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClubTypeComponent } from './add-club-type.component';

describe('AddClubTypeComponent', () => {
  let component: AddClubTypeComponent;
  let fixture: ComponentFixture<AddClubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClubTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
