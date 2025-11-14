import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View10Component } from './view10.component';

describe('View10Component', () => {
  let component: View10Component;
  let fixture: ComponentFixture<View10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [View10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
