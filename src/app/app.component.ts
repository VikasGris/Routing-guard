import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router , private authService: AuthService){}
  
  onLoadPage1() {
    this.router.navigate(['/page1']);
  }

  onLoadPageFound() {
    this.router.navigate(['/page-found']);
  }

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
