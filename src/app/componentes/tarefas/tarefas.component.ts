import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
 
})
export class TarefasComponent implements OnInit{
  
  lists: any;
  tasks: any;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  navigateToNewList() {
    this.router.navigate(['/new-list']);
  }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          console.log(params);
          this.taskService.getTasks(params['listId']).subscribe((tasks: any)=> {
            this.tasks = tasks;
          })
        }
        
      )

      this.taskService.getLists().subscribe((lists: any) => {
        this.lists = lists;
      })
  }

}
