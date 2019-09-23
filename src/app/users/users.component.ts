import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ResponseUser, ResponseUsers, RequestID} from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  request: RequestID = {
    id: null
  }

  responseUser: ResponseUser;
  responseUsers: ResponseUsers;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  searchByID(id:number){
    this.userService.search(id).subscribe(response => this.responseUser = response);
  }

  getCountedUsers(entries:number){
    console.log(entries);
    this.userService.getCountedUsers(entries).subscribe(response=> this.responseUsers =response);
  }

  get2CountedUsers(){
    console.log("Hasta aqui bien");
    this.userService.get2CountedUsers().subscribe(response=> this.responseUsers =response);
  }

  get5CountedUsers(){
    console.log("Hasta aqui bien");
    this.userService.get5CountedUsers().subscribe(response=> this.responseUsers =response);
  }

  get10CountedUsers(){
    console.log("Hasta aqui bien");
    this.userService.get10CountedUsers().subscribe(response=> this.responseUsers =response);
  }


}
