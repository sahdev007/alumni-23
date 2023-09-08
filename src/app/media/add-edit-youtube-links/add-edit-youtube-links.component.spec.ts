import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditYoutubeLinksComponent } from './add-edit-youtube-links.component';

describe('AddEditYoutubeLinksComponent', () => {
  let component: AddEditYoutubeLinksComponent;
  let fixture: ComponentFixture<AddEditYoutubeLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditYoutubeLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditYoutubeLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
