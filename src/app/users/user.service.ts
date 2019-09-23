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

  private getOneUserUrl = "https://reqres.in/api/users/4";
  private getAllUsersUrl = "https://reqres.in/api/users";

  //Variable de prueba
  private getFirstSixUsersUrl = "https://reqres.in/api/users?page=1";
  private getSecondSixUsersUrl = "https://reqres.in/api/users?page=2";
  private getThirdSixUsersUrl = "https://reqres.in/api/users?page=3";


  constructor(private http:HttpClient) {  }

  getUser(): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(this.getOneUserUrl);
  }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.getAllUsersUrl);
  }

  createUser(request:RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.getAllUsersUrl, request);
  }

  search(id:number): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`https://reqres.in/api/users/${id}`);
  }

  /*get5Users(): List<Observable<ResponseUsers>>{
  //  var aux:List<Observable<ResponseUsers>>;
    aux.push(this.http.get<ResponseUsers>(this.getFirstSixUsersUrl));
    return aux;
  }

  get10Users(): List<Observable<ResponseUsers>>{
    var aux:List<Observable<ResponseUsers>>;
    aux.push(this.http.get<ResponseUsers>(this.getFirstSixUsersUrl));
    aux.push(this.http.get<ResponseUsers>(this.getSecondSixUsersUrl));
    return aux;
  }

  get15Users(): List<Observable<ResponseUsers>>{
    var aux:List<Observable<ResponseUsers>>;
    aux.push(this.http.get<ResponseUsers>(this.getFirstSixUsersUrl));
    aux.push(this.http.get<ResponseUsers>(this.getSecondSixUsersUrl));
    aux.push(this.http.get<ResponseUsers>(this.getThirdSixUsersUrl));
    return aux;
  }*/

}
