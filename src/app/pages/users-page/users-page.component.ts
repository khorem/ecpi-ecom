import { Component,OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';
import { UsersEachComponent } from '../../users-each/users-each.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UsersEachComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  users : User [] = [];

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) =>{
      this.users = users;
    });
  }
  

}
