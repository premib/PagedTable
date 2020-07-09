import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getObjects(pageNo: number, limit: number): Observable<any>{
    return this.http.get(`https://5f0404934c6a2b00164906a4.mockapi.io/users?page=${pageNo}&limit=${limit}`);
  }
}
