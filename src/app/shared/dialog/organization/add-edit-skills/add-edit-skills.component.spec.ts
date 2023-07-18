import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSkillsComponent } from './add-edit-skills.component';

describe('AddEditSkillsComponent', () => {
  let component: AddEditSkillsComponent;
  let fixture: ComponentFixture<AddEditSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
