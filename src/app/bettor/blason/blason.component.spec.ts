import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasonComponent } from './blason.component';

describe('BlasonComponent', () => {
  let component: BlasonComponent;
  let fixture: ComponentFixture<BlasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
