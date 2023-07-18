import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteBatchmatesComponent } from './invite-batchmates.component';

describe('InviteBatchmatesComponent', () => {
  let component: InviteBatchmatesComponent;
  let fixture: ComponentFixture<InviteBatchmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteBatchmatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteBatchmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
