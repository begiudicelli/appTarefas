import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }  
  
  getLoggedInStatus(): boolean {
    return this.loggedIn.value;
  }
}
