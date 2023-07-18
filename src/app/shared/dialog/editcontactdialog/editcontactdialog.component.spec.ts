import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontactdialogComponent } from './editcontactdialog.component';

describe('EditcontactdialogComponent', () => {
  let component: EditcontactdialogComponent;
  let fixture: ComponentFixture<EditcontactdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcontactdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontactdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
