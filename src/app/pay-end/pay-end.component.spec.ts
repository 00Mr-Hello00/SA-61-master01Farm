import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEndComponent } from './pay-end.component';

describe('PayEndComponent', () => {
  let component: PayEndComponent;
  let fixture: ComponentFixture<PayEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
