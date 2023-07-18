import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessVenturesComponent } from './edit-business-ventures.component';

describe('EditBusinessVenturesComponent', () => {
  let component: EditBusinessVenturesComponent;
  let fixture: ComponentFixture<EditBusinessVenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBusinessVenturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBusinessVenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
