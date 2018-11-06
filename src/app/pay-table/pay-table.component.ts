import { Component, OnInit } from '@angular/core';
import {TableService} from "../shared/table/table.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pay-table',
  templateUrl: './pay-table.component.html',
  styleUrls: ['./pay-table.component.css']
})
export class PayTableComponent implements OnInit {

  reId:number;
  healthcheckerinfo:string;
  name:string;
  program:string;
  payment:number;

  dataColumns: string[] = ['no', 'name', 'Program', 'Pay', 'CreditPay','CashPay'];

  record: Array<any>;

  constructor(private tableService: TableService,private router: Router) { }

  ngOnInit() {
    this.tableService.getRecord().subscribe(data => {
      this.record = data;
      console.log(this.record);
    });
  }


  CreditPay(element): void {
    this.router.navigate(['creditpay/' + element.reId]);
  }

  CashPay(element): void {
    this.router.navigate(['cashpay/' + element.reId]);
  }

}
