import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private users: User[] = [
      { id: 1, name: 'John Doe', fullname: 'John Doe', email: 'john@example.com', password: '123456', confirmPassword: '123456', profilePicture: 'path/to/profile-picture' },
      { id: 2, name: 'Jane Smith', fullname: 'Jane Smith', email: 'jane@example.com', password: '654321', confirmPassword: '654321', profilePicture: 'path/to/profile-picture' },
      { id: 3, name: 'Mike Johnson', fullname: 'Mike Johnson', email: 'mike@example.com', password: 'abcdef', confirmPassword: 'abcdef', profilePicture: 'path/to/profile-picture' },
    ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
