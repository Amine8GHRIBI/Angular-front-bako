import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const AUTH_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(environment.API_URL + '/login', data);
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.API_URL + '/register', data);
  }
}
