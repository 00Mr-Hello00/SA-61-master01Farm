import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }


  // private user = new BehaviorSubject('default message');
  // currentMessage = this.user.asObservable();
  //
  //
  // adder(username: string) {
  //   this.user.next(username);
  // }

  getRecord(): Observable<any> {
    return this.http.get(this.API + '/Record');
  }

  getRecordID(reId): Observable<any>{
    return this.http.get(this.API +'/Record/getdata/' + reId);
  }
  getPayment():Observable<any>{
    return this.http.get(this.API + '/Payments');
  }

}
