import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { LoggedHeaderComponent } from "./componentes/logged-header/logged-header.component";
import { CommonModule } from '@angular/common';
import { AuthService } from './componentes/autenticacao/AuthService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoggedHeaderComponent, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
        
    this.isLoggedIn = this.authService.getLoggedInStatus();
  }
}
