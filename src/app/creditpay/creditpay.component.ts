import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreditpayService} from "../shared/creditpay/creditpay.service";
import {TableService} from "../shared/table/table.service";
import {ActivatedRoute} from "@angular/router";
import index from "@angular/cli/lib/cli";
import {Router} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
import {PayeeService} from "../shared/Payee/payee.service";





@Component({
  selector: 'app-creditpay',
  templateUrl: './creditpay.component.html',
  styleUrls: ['./creditpay.component.css']
})
export class CreditpayComponent implements OnInit {

  private sub: any;
  private reId:number;
    program:string;
    payment:number;
  record: Array<any>;

//payment...
  price:number;
  namePay:any;



//CreditCard...

  creditNumber:any;
  csc:number;
  expiredDate:any;
//CreditCard...
  creditCard: Array<any>;
  creditID:Array<any>;
  creditcrad ={
    creditID : ''
  }

//CreditType...
  creditType: Array<any>;
  credit: any = {
    creditTypeSelect: ''
  };

// Payee...

  namePayee : string;
  payee:Array<any>;
  payeeID:Array<any>;
  payee2={
    payeeID:''
  }



    constructor(private payeeService : PayeeService,private router: Router,private tableService : TableService,private creditpayService: CreditpayService ,
                private httpClient: HttpClient,private rout: ActivatedRoute , private sanitizer: DomSanitizer) {

      this.sanitizer = sanitizer;
    }





  ngOnInit() {
      // CreditType----------------------------------------------
    this.creditpayService.getCreditType().subscribe(data => {
      this.creditType = data;
      console.log(this.creditType);
    });

    // CreditCard------------------------------------------------------
    this.creditpayService.getCreditType().subscribe(data => {
      this.creditCard = data;
      console.log(this.creditCard);
    });
    // Record...

    this.tableService.getRecord().subscribe(data => {
      this.record = data;
      console.log(this.record);
    });

    this.sub = this.rout.params.subscribe(params => {
      this.reId = +params['reId'];
      console.log(this.reId);
    });

    // this.tableService.getRecordID(this.reId).subscribe(data2 => {
    //   this.record2 = data2;
    //   console.log(this.record2);
    // });

    this.payeeService.getPayee().subscribe(data => {
      this.payee = data;
      console.log(this.payee);
    });

  }
  creditXX = 1;
  payeeXX=1;


  save() {


    if (this.credit.creditTypeSelect === ''|| this.namePayee == null ){
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {

      this.httpClient.post('http://localhost:8080/CreditCard' + '/' + this.creditNumber + '/' + this.csc + '/' + this.expiredDate + '/' + this.credit.creditTypeSelect,this.credit)
        .subscribe(
          data => {
            console.log('POST Request is successful', data);
          },
          error => {
            console.log('Error', error);
          }
        );

      this.httpClient.post('http://localhost:8080/Payee' + '/' + this.namePayee ,this.credit)
        .subscribe(
          data => {
            console.log('POST Request is successful', data);

          },
          error => {
            console.log('Error', error);
          }
        );



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//       this.httpClient.post('http://localhost:8080/Payments' + '/' + 2 + '/'+ this.namePay +'/'+ this.price + '/' + this.creditXX +'/' + this.payeeXX,this.credit)
//         .subscribe(
//           data => {
//             console.log('POST Request is successful', data);
//
//             this.payeeXX++;
//             this.creditXX++;
//           },
//           error => {
//             console.log('Error', error);
//           }
//         );





    }
    this.httpClient.post('http://localhost:8080/Payments' + '/' + 2 + '/'+ this.namePay +'/'+ this.price + '/' + this.creditXX +'/' + this.payeeXX,this.credit)
      .subscribe(
        data => {
          console.log('POST Request is successful', data);

          this.payeeXX++;
          this.creditXX++;
        },
        error => {
          console.log('Error', error);
        }
      );


  }



}
