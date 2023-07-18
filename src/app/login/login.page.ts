import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
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
        this.router.navigate(['/home2']);
      } catch (error) {
        // Handle login error
      }
    }
    
    
}
