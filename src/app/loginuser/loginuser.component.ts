import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/services/authService/auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../core/services/tokenService/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})

export class LoginuserComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];

  form: any = {};
  isSuccessful = false;
  isSignInFailed = false;
  isLoggedIn?: boolean;
  errorMessage = 'Email or password is not correct';
  public loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void{
    const formData = new FormData();
     console.log(this.loginForm?.controls['email'].value);
    const loginUser: any = {
      // id: this.registerUser?.id,
      email: this.loginForm?.controls['email'].value,
      password: this.loginForm?.controls['password'].value
    };
    
    formData.append('loginUser', JSON.stringify(loginUser));

    if (!this.tokenStorage.isAuthenticated()){
      this.authService.login(formData).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          console.log("tk"+ data.token);
          this.isSuccessful = true;
          this.isSignInFailed = false;
          this.router.navigate(['/order']);
        },
        err => {
          this.isSignInFailed = true;
        }
      );
    } else {
      this.isLoggedIn = true;
    }
  } 
}
