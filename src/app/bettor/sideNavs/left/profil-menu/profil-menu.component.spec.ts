import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMenuComponent } from './profil-menu.component';

describe('ProfilMenuComponent', () => {
  let component: ProfilMenuComponent;
  let fixture: ComponentFixture<ProfilMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
