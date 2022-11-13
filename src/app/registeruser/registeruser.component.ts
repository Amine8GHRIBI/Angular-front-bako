import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/authService/auth.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {Address} from '../core/model/address';
import { User } from '../core/model/user';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];

  matcher = new ErrorStateMatcher();
  private registerUser?: User;
  errorMessage = '';
  passwordIsEqual?: boolean;
  public registrationForm: FormGroup;


  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.registrationForm = this.builder.group({
      email: ['',  [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      street: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     // repeatPassword: [''],
    }, 
    //{validator: this.checkPasswords }
    );
    
  }

     
  ngOnInit(): void {

  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls['password']?.value;
    let confirmPass = group.controls['repeatPassword']?.value;

    return pass === confirmPass ? null : { notSame: true};
  }

      register(): void {
      const formData = new FormData();
      console.log("new email" + this.registrationForm.controls['email'].value.toString)

      const registerUser: any = {
      userName : this.registrationForm.controls['username'].value,
      email: this.registrationForm.controls['email'].value,
      password: this.registrationForm.controls['password'].value,
      address: {
        city: this.registrationForm.controls['city'].value,
      street: this.registrationForm.controls['street'].value,
      },
     
    
    };

      const address: any = {
       
      };

      formData.append('registerUser', JSON.stringify(registerUser));
      formData.append('address', JSON.stringify(address));

      this.authService.register(registerUser).subscribe(
      data => {
        this.router.navigateByUrl('/login');
      },
      err => {
          this.errorMessage = err.error;
          console.log("error" + this.errorMessage.toString)
      }
    );
  }


}
