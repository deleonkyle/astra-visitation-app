import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  profilelogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }
  signUp(user: User): void {
    // Save the user to local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    // Retrieve the user from local storage
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      const currentUser: User = JSON.parse(currentUserString);
      if (currentUser.email === email && currentUser.password === password) {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        return true;
      }
    }
    return false;
  }

  logout(): void {
    // Clear local storage and mark user as logged out
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }
}
