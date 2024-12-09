import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

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

  getTasks(listId: string){
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createTask(title: String, listId: string) {
    //aqui nos vamos enviar um pedido pro servidor criar uma tarefa

    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }
}
