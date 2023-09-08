import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndUpdatesComponent } from './news-and-updates.component';

describe('NewsAndUpdatesComponent', () => {
  let component: NewsAndUpdatesComponent;
  let fixture: ComponentFixture<NewsAndUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAndUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
