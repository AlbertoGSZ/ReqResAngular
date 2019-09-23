import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { CreateComponent} from './users/create/create.component';

const routes: Routes = [
  {path: 'users/create', component: CreateComponent},
  {path: 'users', component: UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
