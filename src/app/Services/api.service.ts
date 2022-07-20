import { Injectable } from '@angular/core';
import { HttpClientModule,HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // gets all requisitions from the API
  getAllRequisitions(): Observable<any> {
    return this.http.get(this.baseUrl + '/requisitions/', 
    { headers: this.httpHeaders });
  }

  // posting requisition to the API
  saveUserData(data:any): Observable<any> {
    const url = this.baseUrl + '/requisitions/';
    return this.http.post(url, data);
  }

}
