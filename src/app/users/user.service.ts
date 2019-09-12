import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ResponseUser} from './user.model';
import { ResponseUsers} from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getOneUserUrl = "https://reqres.in/api/users/4";
  private getAllUsersUrl = "https://reqres.in/api/users";


  constructor(private http:HttpClient) {  }

  //getUser(id:string): Observable<ResponseUser>{
  //  const _url = `${this.getOneUserUrl}/${id}`;
  //  return this.http.get<ResponseUser>(_url);
  //}

  getUser(): Observable<ResponseUser>{
    console.log(this.http.get<ResponseUser>(this.getOneUserUrl));
    return this.http.get<ResponseUser>(this.getOneUserUrl);
  }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.getAllUsersUrl);
  }

}
