import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbupAlumniSocialChannelComponent } from './sbup-alumni-social-channel.component';

describe('SbupAlumniSocialChannelComponent', () => {
  let component: SbupAlumniSocialChannelComponent;
  let fixture: ComponentFixture<SbupAlumniSocialChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbupAlumniSocialChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbupAlumniSocialChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
