import { DealerComponent } from './dealer/dealer.component';
import { ClientMenuComponent } from './menu/client-menu/client-menu.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BakoSpaceComponent } from './bako-space/bako-space.component';
import { FaqComponent } from './faq/faq.component';
import { OrderComponent } from './order/order.component';
import { NewsSpaceComponent } from './news-space/news-space.component';
import { TechComponent } from './tech/tech.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { AuthGuardService } from './core/services/guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bako', component: BakoSpaceComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'order', component: OrderComponent,
  canActivate: [AuthGuardService] 
},
  { path: 'news', component: NewsSpaceComponent },
  { path: 'tech', component: TechComponent },
  { path: 'login', component: LoginuserComponent},
  { path: 'register',component:RegisteruserComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'chekout', component: ChekoutComponent},
  {path: 'clientmenu', component: ClientMenuComponent},
  {path:'dealer',component:DealerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
