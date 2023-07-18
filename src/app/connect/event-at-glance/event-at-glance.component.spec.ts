import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAtGlanceComponent } from './event-at-glance.component';

describe('EventAtGlanceComponent', () => {
  let component: EventAtGlanceComponent;
  let fixture: ComponentFixture<EventAtGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAtGlanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAtGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
