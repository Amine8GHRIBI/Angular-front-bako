import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cartService/cart.service';
import {Cart} from '../../core/model/cart';
import {Router} from '@angular/router';
import {OrderService} from '../../core/services/orderService/order.service';
import {FormBuilder} from '@angular/forms';
import {TokenStorageService} from '../../core/services/tokenService/token-storage.service';
import {User} from '../../core/model/user';
import {Order} from '../../core/model/order';
import {Address} from '../../core/model/address';
import { CommandeService } from 'src/app/services/commande.service';
import { Contact } from 'src/app/core/model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartData: Cart = {
    orderProducts: [] ,
    quantityOfItems: 0,
    totalPrice: 0
  };
  
  displayedColumns: string[] = [ 'usermail','name', 'quantity', 'price'];
  dataSource = this.cartData.orderProducts;

  address: Address = {
  id: this.tokenStorage.getUser().address?.id,
  street: this.tokenStorage.getUser().address?.street,
  city: this.tokenStorage.getUser().address?.city
  };

  user: User = {
      id: this.tokenStorage.getUser().id,
      email: this.tokenStorage.getUser().email,
      address: this?.address
  };

  order?: Order;

  constructor(private http:HttpClient,private commandservice : CommandeService, private token: TokenStorageService,private cartService: CartService, private router: Router, private orderService: OrderService, private formBuilder: FormBuilder, private tokenStorage: TokenStorageService) {
  }
  usermail? : string;
  usename? : string;
  
  getusermail(){
  this.usermail =  this.token.getUser().email;
  }

  getusername(){
    this.usename = this.token.getUser().name;
  }

 commande? : Contact;
 headers = new HttpHeaders({ 'Content-Type': 'application/json' });

 prefixe = "https://backend.bakomotors.com/mail";

  sendcommand(){
  /// this.commandservice.sendCommande(this.commande!)
  return this.http.post(this.prefixe, this.commande)
  .subscribe(result => console.log(result));
  }
  
  ngOnInit(): void {
    this.commande = {
      "name" : "amine",
      "email" : this.token.getUser().email,
      "subject" : "I wanna buy B10",
      "object" :""
    
    };
    this.cartService.cartDataChanged$.subscribe(cart => this.cartData = cart);
    this.order = new Order(this.cartData.totalPrice!, this.cartData.orderProducts!, this.user.id!);
    this.getusermail();
  }

  placeOrder(){
    const data = new FormData();
    data.append('order', JSON.stringify(this.order));
    this.orderService.placeOrder(data);
    this.cartService.clearCart();
    this.router.navigateByUrl("/menu");
  }
}