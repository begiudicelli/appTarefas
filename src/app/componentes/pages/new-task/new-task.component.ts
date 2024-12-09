import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  // listId: string;

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.listId = params['_listId'];
    //   console.log(this.listId);
    // })
  }


  // createTask(title: string, listId: string) {
  //   this.taskService.createTask(title, listId);
  //   //navegacao para /lists/response._id

  // }

  createTask(){
    this.router.navigate(['/new-task']);
  }


  navigateToTarefasList() {
    this.router.navigate(['/tarefas']);
  }

}
