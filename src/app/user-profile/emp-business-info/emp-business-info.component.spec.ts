import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBusinessInfoComponent } from './emp-business-info.component';

describe('EmpBusinessInfoComponent', () => {
  let component: EmpBusinessInfoComponent;
  let fixture: ComponentFixture<EmpBusinessInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBusinessInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpBusinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
