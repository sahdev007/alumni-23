import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDonationImagesComponent } from './upload-donation-images.component';

describe('UploadDonationImagesComponent', () => {
  let component: UploadDonationImagesComponent;
  let fixture: ComponentFixture<UploadDonationImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDonationImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDonationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
