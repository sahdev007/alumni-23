import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSocialChannelComponent } from './add-edit-social-channel.component';

describe('AddEditSocialChannelComponent', () => {
  let component: AddEditSocialChannelComponent;
  let fixture: ComponentFixture<AddEditSocialChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSocialChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSocialChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
