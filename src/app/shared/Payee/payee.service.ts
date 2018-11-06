import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PayeeService{

  public API = '//localhost:8080';



  constructor(private http: HttpClient) { }

  getPayee(): Observable<any> {
    return this.http.get(this.API + '/Payee');
  }



}
