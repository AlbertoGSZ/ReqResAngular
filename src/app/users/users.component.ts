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
    //this.userService.getUser().subscribe(response => this.responseUser = response )
    //this.userService.searchByID(id).subscribe(response => this.response)
    this.userService.getUsers().subscribe(response => this.responseUsers = response )
  }

  searchByID(id:number){
    console.log("id: "+id);
    this.userService.search(id).subscribe(response => this.responseUser = response);
  }

}
