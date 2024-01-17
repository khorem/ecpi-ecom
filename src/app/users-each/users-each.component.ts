import { Component, Input } from '@angular/core';
import { User } from '../core/models/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-each',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-each.component.html',
  styleUrl: './users-each.component.scss'
})
export class UsersEachComponent {
  @Input() user: User | undefined;
}
