import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }



  getLists(){
    return this.webRequestService.get('lists');
  }

  createList(title: String) {
    //aqui nos vamos enviar um pedido pro servidor criar uma lista

    return this.webRequestService.post('lists', { title });
  }
 
  updateList(id: String, title: string) {
    //aqui nos vamos enviar um pedido pro servidor criar uma lista

    return this.webRequestService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: String, title: string) {
    //aqui nos vamos enviar um pedido pro servidor criar uma lista

    return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteList(id: string){
    return this.webRequestService.delete(`lists/${id}`)
  }

  deleteTask(listId: string, taskId: string){
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`)
  }

  getTasks(listId: string){
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createTask(title: String, listId: string) {
    //aqui nos vamos enviar um pedido pro servidor criar uma tarefa

    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }

  complete(task: Task){
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }
}
