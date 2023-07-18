import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { ContactService } from '../services/contact-service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private authService: AuthService, private contactService: ContactService, private navCtrl: NavController, private alertController: AlertController) {}

  logout() {
    this.presentAlert('Logout', 'Are you sure you want to logout?').then((confirmed) => {
      if (confirmed) {
        this.navCtrl.navigateRoot('/login');
      }
    });
  }

  async presentAlert(title: string, message: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              resolve(false);
            },
          },
          {
            text: 'Logout',
            handler: () => {
              resolve(true);
            },
          },
        ],
      });

      await alert.present();
    });
  }


  contactUs() {
    // Call the contactUs method from your ContactService
    this.contactService.contactUs();
  }

}
