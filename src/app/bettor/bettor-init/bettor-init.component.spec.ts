import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettorInitComponent } from './bettor-init.component';

describe('BettorInitComponent', () => {
  let component: BettorInitComponent;
  let fixture: ComponentFixture<BettorInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettorInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettorInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
