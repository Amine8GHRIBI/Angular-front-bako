import { ProductService } from './../core/services/productService/product.service';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommandeService } from '../services/commande.service';

import { merge } from 'rxjs/operators';

import * as $AB from 'jquery';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Hero } from './model';
import { HEROES } from './mock-hero';
import { CartService } from '../core/services/cartService/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../shopping/cart-dialog/cart-dialog.component';
import { Cart } from '../core/model/cart';
import { Product } from '../core/model/product';
import { Category } from '../core/model/category';
import { CategoryService } from '../core/services/categoryService/category.service';
import { Type } from '../core/model/Type';
import { Configuration } from '../core/model/configuration';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../core/services/tokenService/token-storage.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})

export class OrderComponent implements OnInit {
  @ViewChild('scroller') scroller?: CdkVirtualScrollViewport;
  heroes = HEROES;
  selectedbatt?: Type;
  selectedCargo?: Type;
  selectedCockpit?: Type;
  selectedAdditional?: Type;
  submitproduct?: Product;

  mealType?: string;
  dataSource: Product[] = [];
  categories?: Category[];


  onSelectbatt(hero: Type , product : Product ): void {

    this.selectedbatt = hero;
   // product.configs = product.configs?.filter(item => item != hero.description);
   this.submitproduct!.configs[0].types = product.configs[0].types?.filter((item => item.description == hero.description)) ;
   this.submitproduct!.configs[0].types?.forEach(function (value) {
    console.log(value);
    });

   // config.types = 
  }

  OnSelectcargo(cargo :Type, product : Product):void{
     this.selectedCargo = cargo;
     
     this.submitproduct!.configs[1].types = product.configs[1].types?.filter((item => item.description == cargo.description)) ;
     this.submitproduct!.configs[1].types?.forEach(function (value) {
      console.log(value);
      });
  }
  OnSelectCockpit(cockpit :Type, product : Product):void{
    this.selectedCockpit = cockpit;
    this.submitproduct!.configs[2].types = product.configs[2].types?.filter((item => item.description == cockpit.description)) ;

 }
 OnSelectAdditional(Additional :Type, product : Product):void{
  this.selectedAdditional = Additional;
  this.submitproduct!.configs[3].types = product.configs[3].types?.filter((item => item.description == Additional.description)) ;

}
images = [1, 2, 3, 4, 5, 6,].map((n) =>  `../../assets/imgs/preorder/${n}.jpg`);

constructor(private  token: TokenStorageService , config: NgbCarouselConfig,private cartDialog: MatDialog,public productService: ProductService, private cartService: CartService, private categoryService: CategoryService,private formBuilder: FormBuilder, private http: HttpClient,private elem: ElementRef, ) { 
  config.interval = 2000;
  config.keyboard = true;
  config.pauseOnHover = true;
}

techForm = this.formBuilder.group({
    selectedTech: ''
  });
  onFormSubmit() {
    console.log(this.techForm.get('selectedTech')?.value);
  }

/*  addToCart(food?: Hero){
    this.cartService.addToCart(food);
    console.log("hero" + food?.type!);
  }*/
  cartData: Cart = {
    orderProducts: [],
    quantityOfItems: 0,
    totalPrice: 0
  };
   usermail? : string;
  getusermail(){
  this.usermail =  this.token.getUser().email;
  }

  ngOnInit(): void {
    //this.getusermail();
    this.getAllProducts();
    this.getAllCategories();
    this.cartService.cartDataChanged$.subscribe(cartData => this.cartData = cartData );
    this.submitproduct = {
      "id": 1,
      "name": "B10",
      "fileName": "xiaomi.jpg",
      "price": 12000.00,
      "configs": [
          {
              "id": 1,
              "title": "Performance",
              "subtitle": "Choose your batterie",
              "types": [
                  {
                      "id": 1,
                      "description": "2.5 kWh - 100 km",
                      "price": 0.00
                  },
                  
              ]
          },
          {
              "id": 2,
              "title": "Cargo space",
              "subtitle": "Exterior",
              "types": [
                  {
                      "id": 4,
                      "description": "Standard",
                      "price": 0.00
                  },
                  
              ]
          },
          {
              "id": 3,
              "title": "Cockpit",
              "subtitle": "Doors",
              "types": [
                  {
                      "id": 6,
                      "description": "No Doors",
                      "price": 0.00
                  },
                 
              ]
          },
          {
              "id": 4,
              "title": "Additional",
              "subtitle": "Connectivity",
              "types": [
                  {
                      "id": 8,
                      "description": "Mobile application",
                      "price": 0.00
                  },
                  
              ]
          }
      ],
      "category": {
          "id": 1,
          "name": "B10"
      }
    }
    
  };
  openCartDialog(): void{

    this.cartDialog.open(CartDialogComponent, {
      data: {}
    })
      .afterClosed().subscribe(() => {
      return this.cartService.cartDataChanged$.subscribe(cartData => this.cartData = cartData );
    });
  }

  filterCategoryOption(category: Category){
    this.productService.findAllProductsByCategory(category).subscribe((data: any[]) => this.dataSource = data);
    console.log('allProds');
  }
  getAllCategories(){
    this.categoryService.findAllCategories().subscribe((data: any[] | undefined) => this.categories = data);
    console.log('allCats');
  }

  addToCart(food: Product){
    this.cartService.addToCart(this.submitproduct);
    console.log(this.submitproduct);
  }
  getAllProducts(): void{
    this.productService.findAllProducts().subscribe((data: any[]) => this.dataSource = data);
  }
}

