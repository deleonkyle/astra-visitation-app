import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage {
  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  getCurrentDateTime(): string {
    const now = new Date();
    return now.toLocaleString();
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

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
}
