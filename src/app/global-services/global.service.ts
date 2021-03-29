import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  primaryAPI = 'localhost/api/';

  constructor(private http: HttpClient) { }

  PostRequest(data: any, url: any){
    return this.http.post(url,data)
  }
}
