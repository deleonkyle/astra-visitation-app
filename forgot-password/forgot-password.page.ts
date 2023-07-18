import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email!: string;

  constructor(private alertController: AlertController) {}

  sendResetLink() {
    // Perform the logic to send a password reset link to the user's email
    // This is just a mock implementation, you should replace it with your own logic

    // Validate if email is provided
    if (!this.email) {
      this.presentAlert('Error', 'Please enter your email.');
      return;
    }

    // Send the password reset link to the user's email
    // Replace the following code with your own logic to send the email

    // Simulate an API call with a delay
    setTimeout(() => {
      // Mock response indicating success or failure
      const success = Math.random() < 0.5;

      if (success) {
        this.presentAlert('Success', 'Password reset link sent to your email.');
      } else {
        this.presentAlert('Error', 'Failed to send the password reset link.');
      }
    }, 2000);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
