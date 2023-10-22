import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authServive: AuthService, 
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onlogin(loginForm: NgForm){
    
    console.log(loginForm.value);
    const token = this.authServive.authUser(loginForm.value);
    if(token)
    {
      localStorage.setItem('token', token.userName);
      this.alertify.success("You have loged-in successfully!");
      this.router.navigate(['/']);
    }
    else
    {
      this.alertify.error("Username and/or Password is not corrent!");
    }
  }
}
