import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MesProduits';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Check if localStorage is available before accessing it
    if (typeof localStorage !== 'undefined') {
      let isloggedin = localStorage.getItem('isloggedIn');
      let loggedUser = localStorage.getItem('loggedUser');

      // Ensure that isloggedin and loggedUser are valid
      if (isloggedin === 'true' && loggedUser) {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      console.warn('localStorage is not available.');
      this.router.navigate(['/login']);
    }
  }

  onLogout() {
    this.authService.logout();
  }
}











