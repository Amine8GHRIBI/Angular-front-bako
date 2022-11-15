import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { CommandeService } from 'src/app/services/commande.service';
import { Contact } from 'src/app/core/model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from '../core/model/user';
import { Order } from '../core/model/order';
import { TokenStorageService } from '../core/services/tokenService/token-storage.service';
import { CartService } from '../core/services/cartService/cart.service';
import { OrderService } from '../core/services/orderService/order.service';
import { Cart } from '../core/model/cart';
import { Address } from '../core/model/address';

@Component({
  selector: 'app-order',
  templateUrl: './guest-checkout.component.html',
  styleUrls: ['./guest-checkout.component.css']
})
export class GuestCheckoutComponent  implements OnInit {

  cartData: Cart = {
    orderProducts: [] ,
    quantityOfItems: 0,
    totalPrice: 0
  };
  
  displayedColumns: string[] = [ 'usermail','name', 'quantity', 'price'];
  dataSource = this.cartData.orderProducts;
/*
  address: Address = {
  id: this.tokenStorage.getUser().address?.id,
  street: this.tokenStorage.getUser().address?.street,
  city: this.tokenStorage.getUser().address?.city
  };

  user: User = {
      id: this.tokenStorage.getUser().id,
      email: this.tokenStorage.getUser().email,
      address: this?.address
  };*/

  order?: Order;

  constructor(private http:HttpClient,private commandservice : CommandeService, private token: TokenStorageService,private cartService: CartService, private router: Router, private orderService: OrderService, private formBuilder: FormBuilder, private tokenStorage: TokenStorageService) {
  }
  usermail? : string;
  usename? : string;
  reactiveForm = new FormGroup({
    firstname: new FormControl(),
    adress: new FormControl(),
    email: new FormControl(),
  })

  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  adress = new FormControl('');




  
  getusermail(){
  this.usermail =  this.token.getUser().email;
  }

  getusername(){
    this.usename = this.token.getUser().name;
  }

 commande? : Contact;
 headers = new HttpHeaders({ 'Content-Type': 'application/json' });

 prefixe = environment.API_URL + "/mail";

  sendcommand(){
    console.log(this.name.value)
    this.commande = {
      "name" : this.name.value!,
      "email" : this.email.value!,
      "subject" : "I wanna buy B10 and my adress is " + this.adress.value!,
      "content" :"phone number " + this.phone.value!,

    
    };
  /// this.commandservice.sendCommande(this.commande!)
  return this.http.post(this.prefixe, this.commande)
  .subscribe(result => console.log(result));
  }
  
  ngOnInit(): void {
    
    this.cartService.cartDataChanged$.subscribe(cart => this.cartData = cart);
    ////this.order = new Order(this.cartData.totalPrice!, this.cartData.orderProducts!, this.user.id!);
   // this.getusermail();
  }

  placeOrder(){
    const data = new FormData();
    data.append('order', JSON.stringify(this.order));
    this.orderService.placeOrder(data);
    this.cartService.clearCart();
    this.router.navigateByUrl("/menu");
  }
}