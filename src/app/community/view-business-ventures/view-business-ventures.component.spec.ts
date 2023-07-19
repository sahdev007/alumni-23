import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinessVenturesComponent } from './view-business-ventures.component';

describe('ViewBusinessVenturesComponent', () => {
  let component: ViewBusinessVenturesComponent;
  let fixture: ComponentFixture<ViewBusinessVenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBusinessVenturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusinessVenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
