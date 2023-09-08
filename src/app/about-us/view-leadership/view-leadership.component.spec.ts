import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeadershipComponent } from './view-leadership.component';

describe('ViewLeadershipComponent', () => {
  let component: ViewLeadershipComponent;
  let fixture: ComponentFixture<ViewLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
