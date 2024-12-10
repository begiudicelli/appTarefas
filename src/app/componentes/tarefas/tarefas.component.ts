import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
import { Task } from '../../Models/task.model';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [NgFor, RouterModule, NgClass],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
 
})
export class TarefasComponent implements OnInit{
  
  lists: any;
  tasks: any;

  selectedListId: string;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  navigateToNewList() {
    this.router.navigate(['/new-list']);
  }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          console.log(params);
          this.selectedListId = params['listId'];
          this.taskService.getTasks(params['listId']).subscribe((tasks: any)=> {
            this.tasks = tasks;
          })
        }
        
      )

      this.taskService.getLists().subscribe((lists: any) => {
        this.lists = lists;
      })
  }

  onTaskClick(task: Task){
    //aqui nos queremos colocar a tarefa como completa
    this.taskService.complete(task).subscribe(()=> {
      
      //atualizar a task quando completa
      console.log("complete success");
      task.completed = !task.completed;
      

    });
  }

  onDeleteListClick(){
    this.taskService.deleteList(this.selectedListId).subscribe((res: any)=> {
      this.router.navigate(['/lists']);
      console.log(res);
    });
  }

  onTaskDeleteClick(id: string){
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any)=> {
      // this.router.navigate(['/lists']);
      this.tasks = this.tasks.filter((val: { _id: string; }) => val._id !== id);
      console.log(res);
    });
  }

}
