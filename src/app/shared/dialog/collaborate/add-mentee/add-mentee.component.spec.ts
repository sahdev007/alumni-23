import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenteeComponent } from './add-mentee.component';

describe('AddMenteeComponent', () => {
  let component: AddMenteeComponent;
  let fixture: ComponentFixture<AddMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
