import { TestBed, inject } from '@angular/core/testing';

import { CreditpayService } from './creditpay.service';

describe('PayeeService ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditpayService ]
    });
  });

  it('should be created', inject([CreditpayService ], (service: CreditpayService ) => {
    expect(service).toBeTruthy();
  }));
});
