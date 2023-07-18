import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss'],
})
export class UserManagementPage {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ionViewWillEnter() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.loadUsers();
  }
}
