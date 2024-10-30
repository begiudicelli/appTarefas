import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../servicos/autenticacao/usuarios.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../../user';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent {
  public name: string = "";
  public email: string = "";
  public password: string = "";
  public confirmPassword: string = "";

  constructor(private userService: UsuariosService, private Router: Router) {}  

  register() {    
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }  
    const usuario: User = { name: this.name, email: this.email, password: this.password };   
    
    this.userService.register(usuario).subscribe({
      next: response => {
        alert("Usuário criado com sucesso!");
        this.Router.navigate(['/login']);
      },
      error: err => {        
        alert('Erro ao criar usuário. Tente novamente.');
      }
    });
  }
  
}
