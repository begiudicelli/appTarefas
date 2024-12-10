import { Component } from '@angular/core';
import { TaskService } from '../../../task.service';
import { Router } from '@angular/router';
import { List } from '../../../Models/list.model';

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
    this.taskService.createList(title).subscribe((list: any) => {
      console.log(list);

      //navegacao para /lists/response._id
      this.router.navigate(['/lists', list._id]);
      
    });
  }

  //criando um click para navegacao caso o usuario queira cancelar a criacao
  navigateToTarefasList(){
    this.router.navigate(['/tarefas']);
  }

}
