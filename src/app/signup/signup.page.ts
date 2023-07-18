import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth-service';
import { User } from '../services/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  showPassword = false;
  showConfirmPassword = false;
  fullname!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  profilePicture!: string | ArrayBuffer | null;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  handleProfilePictureChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicture = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async signUp() {
    try {
      const user: User = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        confirmPassword: '',
        profilePicture: null
      };

      await this.authService.signUp(user);

      const toast = await this.toastController.create({
        message: 'Sign up Successful!',
        duration: 3000,
        position: 'top',
        color: 'success',
      });
      toast.present();

      // Navigate to the login page
      this.router.navigate(['/login']);
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Sign up Failed. Please try again.',
        duration: 3000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
    }
  }
}
