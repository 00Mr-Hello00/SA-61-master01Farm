import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreditpayService{

  public API = '//localhost:8080';



  constructor(private http: HttpClient) { }

  getCreditType(): Observable<any> {
    return this.http.get(this.API + '/CreditType');
  }

  getCreditCard(): Observable<any> {
    return this.http.get(this.API + '/CreditCard');
  }


}
