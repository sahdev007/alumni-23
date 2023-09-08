import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsAndUpdatesComponent } from './view-news-and-updates.component';

describe('ViewNewsAndUpdatesComponent', () => {
  let component: ViewNewsAndUpdatesComponent;
  let fixture: ComponentFixture<ViewNewsAndUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewsAndUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsAndUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
