import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYoutubeLinksComponent } from './view-youtube-links.component';

describe('ViewYoutubeLinksComponent', () => {
  let component: ViewYoutubeLinksComponent;
  let fixture: ComponentFixture<ViewYoutubeLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewYoutubeLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewYoutubeLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
