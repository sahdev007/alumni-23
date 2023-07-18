import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFeaturedComponent } from './get-featured.component';

describe('GetFeaturedComponent', () => {
  let component: GetFeaturedComponent;
  let fixture: ComponentFixture<GetFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
