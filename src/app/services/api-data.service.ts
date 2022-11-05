import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private baseurl:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get(this.baseurl);
  }
}
