import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessVenturesComponent } from './business-ventures.component';

describe('BusinessVenturesComponent', () => {
  let component: BusinessVenturesComponent;
  let fixture: ComponentFixture<BusinessVenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessVenturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessVenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
