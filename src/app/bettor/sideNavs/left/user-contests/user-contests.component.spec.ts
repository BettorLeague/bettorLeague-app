import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContestsComponent } from './user-contests.component';

describe('UserContestsComponent', () => {
  let component: UserContestsComponent;
  let fixture: ComponentFixture<UserContestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
