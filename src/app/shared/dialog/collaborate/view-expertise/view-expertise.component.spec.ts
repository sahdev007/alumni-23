import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpertiseComponent } from './view-expertise.component';

describe('ViewExpertiseComponent', () => {
  let component: ViewExpertiseComponent;
  let fixture: ComponentFixture<ViewExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
