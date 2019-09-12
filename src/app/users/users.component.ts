import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ResponseUser } from './user.model';
import { ResponseUsers } from './user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUser: ResponseUser;
  responseUsers: ResponseUsers;

  //id:string;
  //request: RequestUpdate;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.id = this.route.snapshot.paramMap.get('id');
    //this.userService.getUser(this.id).subscribe(response => this.request = {
    //  id: `${response.data.id}`
    //}),
    this.userService.getUser().subscribe(response => this.responseUser = response )
    this.userService.getUsers().subscribe(response => this.responseUsers = response )
  }

}
