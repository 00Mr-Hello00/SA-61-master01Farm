import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreditpayService} from "../shared/creditpay/creditpay.service";

@Component({
  selector: 'app-cashpay',
  templateUrl: './cashpay.component.html',
  styleUrls: ['./cashpay.component.css']
})
export class CashpayComponent implements OnInit {

// Payee...
  namePayee : string;





  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }



  save() {
    if (this.namePayee === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {


      this.httpClient.post('http://localhost:8080/Payee' + '/' + this.namePayee ,this.namePayee)
        .subscribe(
          data => {
            console.log('POST Request is successful', data);

          },
          error => {
            console.log('Error', error);
          }
        );





    }
  }





}
