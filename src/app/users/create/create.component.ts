import { Component, OnInit } from '@angular/core';
import { ResponseCreate, RequestCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  request: RequestCreate = {
    name:'',
    surname:'',
    email:'',
    avatar:''
  }

  response: ResponseCreate

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  save(){
    this.userService.createUser(this.request).subscribe(response => {
      this.response = response;
    });
  }

}
