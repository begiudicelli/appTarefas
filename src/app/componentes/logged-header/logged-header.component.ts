import { Component } from '@angular/core';
import { AuthService } from '../autenticacao/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-header',
  standalone: true,
  imports: [],
  templateUrl: './logged-header.component.html',
  styleUrl: './logged-header.component.css'
})
export class LoggedHeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['/login']);
  }

}
