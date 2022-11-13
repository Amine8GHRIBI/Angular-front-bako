import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {authInterceptorProviders} from '../security/auth.interceptor.service';
import {AuthGuardService} from './services/guards/auth-guard.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders, AuthGuardService],

})
export class CoreModule { }
