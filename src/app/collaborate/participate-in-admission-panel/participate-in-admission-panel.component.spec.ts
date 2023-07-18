import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateInAdmissionPanelComponent } from './participate-in-admission-panel.component';

describe('ParticipateInAdmissionPanelComponent', () => {
  let component: ParticipateInAdmissionPanelComponent;
  let fixture: ComponentFixture<ParticipateInAdmissionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipateInAdmissionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipateInAdmissionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
