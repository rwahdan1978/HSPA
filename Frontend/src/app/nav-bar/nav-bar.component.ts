import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public today = Date.now();
  loggedinUser: string;

  constructor(private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    window.matchMedia("(orientation:portrait)").addEventListener("change", (e: MediaQueryListEvent) => { 
      const portrait: boolean = e.matches; 
      if (portrait) { 
        location.reload(); 
      } else { 
        location.reload(); 
      } 
    });
    setInterval(() => {
      this.today = Date.now();
    }, 100);
  }

  loggedin()
  {
    this.loggedinUser = localStorage.getItem('token') || '';
    return localStorage.getItem('token'), this.loggedinUser;
  }

  onlogout()
  {
    localStorage.removeItem('token');
    this.alertify.error("You are logged out!")
    this.router.navigate(['/']);
  }
}
