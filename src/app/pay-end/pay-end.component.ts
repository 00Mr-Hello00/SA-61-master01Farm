import { Component, OnInit } from '@angular/core';
import {TableService} from "../shared/table/table.service";
import {PayeeService} from "../shared/Payee/payee.service";

@Component({
  selector: 'app-pay-end',
  templateUrl: './pay-end.component.html',
  styleUrls: ['./pay-end.component.css']
})
export class PayEndComponent implements OnInit {

  paymentsDI:number;
  namePay:string;
  price:number;
  datePayments:Date;
  namePayee:string;



  dataColumns2: string[] = ['No', 'PayName', 'Price', 'DatePayments', 'PayeeName'];
  payment: Array<any>;
  p3ayee:Array<any>;

  constructor(private tableService: TableService,private payeeService: PayeeService) { }

  ngOnInit() {
    this.tableService.getPayment().subscribe(data => {
      this.payment = data;
      console.log(this.payment);
    });

    this.payeeService.getPayee().subscribe(data => {
      this.p3ayee = data;
      console.log(this.p3ayee);
    });
  }

}
