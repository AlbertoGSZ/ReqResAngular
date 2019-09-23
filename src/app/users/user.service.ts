import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ResponseUser} from './user.model';
import { ResponseUsers} from './user.model';
import { ResponseCreate} from './user.model';
import { RequestCreate} from './user.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private numPagEntries = 1;
  private numRequestedEntries = 2;

  private getOneUserUrl = "https://reqres.in/api/users/4";
  private getAllUsersUrl = "https://reqres.in/api/users?page=1&per_page=2";


  constructor(private http:HttpClient) {  }

  getUser(): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(this.getOneUserUrl);
  }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.getAllUsersUrl);
  }

  get2CountedUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`https://reqres.in/api/users?page=1&per_page=2`);
  }

  get5CountedUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`https://reqres.in/api/users?page=1&per_page=5`);
  }

  get10CountedUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`https://reqres.in/api/users?page=1&per_page=10`);
  }

  getCountedUsers(entries:number): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`https://reqres.in/api/users?page=1&per_page=${entries}`);
  }

  createUser(request:RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.getAllUsersUrl, request);
  }

  search(id:number): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`https://reqres.in/api/users/${id}`);
  }



}
