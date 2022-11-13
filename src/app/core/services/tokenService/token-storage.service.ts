import { User } from './../../model/user';
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  logout(): void {
    sessionStorage.clear();
  }

  public saveToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public saveUser(user : User): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    console.log("getuser" + JSON.parse(sessionStorage.getItem(USER_KEY)!))

    return JSON.parse(sessionStorage.getItem(USER_KEY)!);
  }
  public isAuthenticated(): boolean {
    console.log("getuser" + sessionStorage.getItem(USER_KEY))
    console.log("ses :" + sessionStorage.getItem(TOKEN_KEY))
    return sessionStorage.getItem(TOKEN_KEY) != null;
  }
}
