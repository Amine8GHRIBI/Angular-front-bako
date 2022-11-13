
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    constructor(private http: HttpClient) { }

    postCategory(category: FormData): Observable<any>{
      return this.http.post(URL + '', category);
    }

  }  