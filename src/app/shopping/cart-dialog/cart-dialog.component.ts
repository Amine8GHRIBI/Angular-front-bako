import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cartService/cart.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Cart} from '../../core/model/cart';
import { TokenStorageService } from 'src/app/core/services/tokenService/token-storage.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  constructor(private token: TokenStorageService, private cartService: CartService, private matDialog: MatDialog, private router: Router) {
  }

    cart: Cart = {
      orderProducts: [],
      quantityOfItems: 0,
      totalPrice: 0
    };

  ngOnInit(): void {
    this.cart = this.cartService.getCartData();
    this.cartService.cartDataChanged$.subscribe(cart => this.cart = cart);

  }
  usermail? : string;
  usename? : string;
  
  getusermail(){
  this.usermail =  this.token.getUser().email;
  }
  
  getusername(){
    this.usename = this.token.getUser().name;
  }
  increase(food: any): void{
    this.cartService.increaseQuantity(food);
    this.cartService.setTotalPrice();
  }
  decrease(food: any): void{
    this.cartService.decreaseQuantity(food);
    this.cartService.setTotalPrice();
  }
  clearCart(): void{
    this.cartService.clearCart();
    this.cartService.setTotalPrice();
  }
  closeDialog(): void{
    this.matDialog.closeAll();
  }
  openCheckout(): void {
    this.closeDialog();
    if (this.token.isAuthenticated()){
      this.router.navigate(['/checkout']);

    }else {
      this.router.navigate(['/guestcheckout']);
    }
  }
}
