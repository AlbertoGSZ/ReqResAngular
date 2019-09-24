import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ResponseUser, ResponseUsers, RequestID} from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  requestedUsersNumber:number;
  requestedPageNumber:number;

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

  getCountedUsers(users:number){
    this.requestedUsersNumber = users;
    this.userService.getCountedUsers(users).subscribe(response=> this.responseUsers =response);
  }

  getNextPage(){
    if (this.requestedPageNumber==null) this.requestedPageNumber = 1;
    this.requestedPageNumber = this.requestedPageNumber+1;
    this.userService.getUsers(this.requestedUsersNumber, this.requestedPageNumber).subscribe(response=>this.responseUsers=response);
  }

  getPreviousPage(){
    this.requestedPageNumber = this.requestedPageNumber-1;
    if (this.requestedPageNumber==0) this.requestedPageNumber = 1;
    this.userService.getUsers(this.requestedUsersNumber, this.requestedPageNumber).subscribe(response=>this.responseUsers=response);
  }

}
