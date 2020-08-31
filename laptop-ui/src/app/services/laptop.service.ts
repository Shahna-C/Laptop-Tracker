import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http:HttpClient) { }

  getLaptops() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/laptops',
    {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)}
    );
  }

  getLaptop(id: number){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/laptops/' + id, 
    {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)}
    );
  }

  createLaptopRegistration(laptop){
    let body = JSON.stringify(laptop);
    return this.http.post('/server/api/v1/laptops', body, httpOptions);
  }

}
