import { Component } from '@angular/core';
import { TaskService } from '../../../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {
  

  constructor(private taskService: TaskService, private router: Router ) { }

  createList(title: string){
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response)

      //navegacao para /lists/response._id
      this.router.navigate(['/lists', response._id]);
      
    });
  }

  //criando um click para navegacao caso o usuario queira cancelar a criacao
  navigateToTarefasList(){
    this.router.navigate(['/tarefas']);
  }

}
