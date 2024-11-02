import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../autenticacao/AuthService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['/login']);
  }

  navigateTologin() {
    this.router.navigate(['/login']);
  }

  navigateToregister() {
    this.router.navigate(['/registrar']);
  }


}
