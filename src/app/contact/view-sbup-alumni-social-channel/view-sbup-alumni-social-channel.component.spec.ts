import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSbupAlumniSocialChannelComponent } from './view-sbup-alumni-social-channel.component';

describe('ViewSbupAlumniSocialChannelComponent', () => {
  let component: ViewSbupAlumniSocialChannelComponent;
  let fixture: ComponentFixture<ViewSbupAlumniSocialChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSbupAlumniSocialChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSbupAlumniSocialChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
