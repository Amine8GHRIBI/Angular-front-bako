import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBakoComponent } from './nav-bako.component';

describe('NavBakoComponent', () => {
  let component: NavBakoComponent;
  let fixture: ComponentFixture<NavBakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBakoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
