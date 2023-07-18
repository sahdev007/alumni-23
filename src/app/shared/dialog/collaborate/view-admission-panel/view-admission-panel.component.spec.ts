import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmissionPanelComponent } from './view-admission-panel.component';

describe('ViewAdmissionPanelComponent', () => {
  let component: ViewAdmissionPanelComponent;
  let fixture: ComponentFixture<ViewAdmissionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdmissionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdmissionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
