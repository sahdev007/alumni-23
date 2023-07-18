import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecialProjectComponent } from './edit-special-project.component';

describe('EditSpecialProjectComponent', () => {
  let component: EditSpecialProjectComponent;
  let fixture: ComponentFixture<EditSpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpecialProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
