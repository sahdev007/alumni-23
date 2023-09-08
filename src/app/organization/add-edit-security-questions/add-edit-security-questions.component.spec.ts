import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSecurityQuestionsComponent } from './add-edit-security-questions.component';

describe('AddEditSecurityQuestionsComponent', () => {
  let component: AddEditSecurityQuestionsComponent;
  let fixture: ComponentFixture<AddEditSecurityQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSecurityQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSecurityQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
