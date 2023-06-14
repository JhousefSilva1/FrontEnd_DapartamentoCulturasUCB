import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  private apiUrlGet = 'http://localhost:7777/api/interest/all';
  private apiUrlGetSub = 'http://localhost:7777/api/subinterest/specific/';

  constructor(private http:HttpClient) { }

  getInterests(): Observable<any> {
    return this.http.get(this.apiUrlGet);
  }

  getSubInterests(name: string): Observable<any> {
    return this.http.get(this.apiUrlGetSub + name);
  }

}
