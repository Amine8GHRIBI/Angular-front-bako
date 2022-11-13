import { NavDealerComponent } from './nav-dealer/nav-dealer.component';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBakoComponent } from './nav-bako/nav-bako.component';
import { NavNewsComponent } from './nav-news/nav-news.component';
import { NavOrderComponent } from './nav-order/nav-order.component';
import { NavTechComponent } from './nav-tech/nav-tech.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavBakoComponent,
    NavNewsComponent,
    NavOrderComponent,
    NavTechComponent,
    NavHomeComponent,
    NavbarComponent,
    NavDealerComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBakoComponent,
    NavNewsComponent,
    NavOrderComponent,
    NavTechComponent,
    NavHomeComponent,
    NavbarComponent,
    NavDealerComponent
    ]
})
export class NavbarListModule { }
