import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User{
  id?: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlAPI = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User>{
    return this.http.post<User>(this.urlAPI, user);
  }

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.urlAPI).pipe(
      map(users => users.find(user => user.email === email && user.password === password) || null)
    );
  }
  
  
}
