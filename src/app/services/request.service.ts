import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

import { User } from '../models/user';

export interface IUser {
  id: number,
  name: string,
  surname: string,
  cellphone: number,
  updated_at: string
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly API = 'http://127.0.0.1:3333/api/v1/users/'
  constructor(private readonly http:HttpClient) {}

  getAll(): Observable <IUser[]> {
    return this.http.get<IUser[]>(`${this.API}getall`);
  }
  
  storeUser(user: any): Observable <User> {
    const body = user;
    return this.http.post<User>(`${this.API}store`,body)
  }
  
  deleteUser(id: any): Observable <void> {
    const body = id;
    return this.http.post<void>(`${this.API}delete`,body)
  }
  
  // editUser(): Observable <IUser> {}
  // deleteUser(): Observable <void> {}
  
  
  
  //  getAll():Observable<User>{
  //   return this.http.get('http://127.0.0.1:3333/api/v1/users/getall').map((res: any) =>{
  //     res.json;
  //   })
  //  }
}
