import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/clientes';
const listPath = '/listclientes';
const addPath = '/creacliente';
const statsPath = '/kpideclientes';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl + listPath);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl + addPath, data);
  }

  getClientStats(): Observable<any> {
    return this.http.get(baseUrl + statsPath);
  }
}