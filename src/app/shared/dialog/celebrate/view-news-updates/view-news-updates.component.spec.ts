import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsUpdatesComponent } from './view-news-updates.component';

describe('ViewNewsUpdatesComponent', () => {
  let component: ViewNewsUpdatesComponent;
  let fixture: ComponentFixture<ViewNewsUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewsUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
