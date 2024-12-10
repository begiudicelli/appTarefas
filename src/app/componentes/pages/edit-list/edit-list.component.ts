import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [],
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.css'
})
export class EditListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute ) { }
 
  listId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
       this.listId = params['listId'];       
        })
      }
      
  
  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe(()=> {
      this.router.navigate(['/lists', this.listId]);
    })
  }
    
      

  navigateToTarefasList(){
    this.router.navigate(['/tarefas']);
  }

}
