import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.getLoggedInStatusFromLocalStorage());

  loggedIn$ = this.loggedIn.asObservable();

  private getLoggedInStatusFromLocalStorage(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      return loggedInStatus === 'true';
    }
    return false; 
  }

  setLoggedIn(value: boolean): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('isLoggedIn', value.toString());
    }
    this.loggedIn.next(value);
  }
  getLoggedInStatus(): boolean {
    return this.loggedIn.value;
  }
}
