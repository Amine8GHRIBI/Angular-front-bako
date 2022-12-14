import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {TokenStorageService} from '../tokenService/token-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private  token: TokenStorageService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.token.isAuthenticated()) {
      console.log("token auth" + this.token);
      return true;
    }

    this.router.navigate(['/login']);
    console.log("guard" + this.token.isAuthenticated());
    return false;
  }
}
