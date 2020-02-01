import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumApiComponent } from './spectrum-api.component';

describe('SpectrumApiComponent', () => {
  let component: SpectrumApiComponent;
  let fixture: ComponentFixture<SpectrumApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectrumApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectrumApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
