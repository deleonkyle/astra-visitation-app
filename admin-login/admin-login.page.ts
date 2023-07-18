import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';


@Component({
  selector: 'app-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {
  email!: string;
  showPassword = false;
  password!: string;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  constructor(
    private authService: AuthService, 
    private router: Router
     ) {}
     async login() {
      try {
        await this.authService.login(this.email, this.password);
        this.router.navigate(['/admin-dashboard']);
      } catch (error) {
        // Handle login error
      }
    }
    
    
}
