import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeadershipComponent } from './add-edit-leadership.component';

describe('AddEditLeadershipComponent', () => {
  let component: AddEditLeadershipComponent;
  let fixture: ComponentFixture<AddEditLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
