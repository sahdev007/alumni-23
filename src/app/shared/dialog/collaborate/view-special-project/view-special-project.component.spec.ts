import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecialProjectComponent } from './view-special-project.component';

describe('ViewSpecialProjectComponent', () => {
  let component: ViewSpecialProjectComponent;
  let fixture: ComponentFixture<ViewSpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecialProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
