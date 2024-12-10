import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../../../task.service';
import { Task } from '../../../Models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  listId: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
    })
  }


 
  createTask(title: string){
    this.taskService.createTask(title, this.listId).subscribe((newTask: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }


  navigateToTarefasList() {
    this.router.navigate(['/tarefas']);
  }

}
