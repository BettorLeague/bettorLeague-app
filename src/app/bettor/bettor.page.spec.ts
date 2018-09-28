import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettorPage } from './bettor.page';

describe('BettorPage', () => {
  let component: BettorPage;
  let fixture: ComponentFixture<BettorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
