import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderProduct} from '../../model/orderProduct';


@Injectable({
  providedIn: 'root'
})
export class OrderProductsService {

  constructor(private http: HttpClient) { }

  findOrdersProducts(id : any): Observable<OrderProduct[]>{
    return this.http.get<OrderProduct[]>(`https://backend.bakomotors.com/orderProduct/${id}`);
  }
}
