import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakoSpaceComponent } from './bako-space.component';

describe('BakoSpaceComponent', () => {
  let component: BakoSpaceComponent;
  let fixture: ComponentFixture<BakoSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakoSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
