import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../../servicos/autenticacao/usuarios.service'; 
import { AuthService } from '../AuthService';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = "";
  password: string = "";  

  constructor(private userService: UsuariosService , private router: Router, private authService: AuthService) {}

  navigateTologin() {
    this.router.navigate(['/login']);
  }

  navigateToregister() {
    this.router.navigate(['/registrar']);
}

login() {
  this.userService.login(this.email, this.password).subscribe({
    next: user => {
      if (user) {
        alert("Login bem-sucedido!");
        this.authService.setLoggedIn(true);
        this.router.navigate(['/tarefas']);
        history.replaceState({}, '');
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    },
    error: err => {
      console.error(err);
      alert("Ocorreu um erro. Tente novamente.");
    }
  });
}

}
