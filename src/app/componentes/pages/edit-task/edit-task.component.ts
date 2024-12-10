import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{

  constructor(private taskService: TaskService, private router: Router, 
    private route: ActivatedRoute ) { }


  taskId: string;
  listId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
       this.taskId = params['taskId']; 
       this.listId = params['listId']; 

        })
      }
      
  
  updateTask(title: string) {
    this.taskService.updateTask(this.listId, this.taskId, title).subscribe(()=> {
      this.router.navigate(['/lists', this.taskId]);
    })
  }


  navigateToTarefasList(){
    this.router.navigate(['/tarefas']);
  }
}
