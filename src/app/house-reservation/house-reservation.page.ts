import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-house-reservation',
  templateUrl: './house-reservation.page.html',
  styleUrls: ['./house-reservation.page.scss'],
})
export class HouseReservationPage {
  selectedDate: string = '';

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private toastController: ToastController,
    private sharedDataService: SharedDataService
  ) {}

  async confirmReservation() {
    if (!this.selectedDate) {
      const toast = await this.toastController.create({
        message: 'Please select a date before confirming.',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
      toast.present();
    } else {
      this.sharedDataService.setSelectedDate(this.selectedDate);
      this.router.navigate(['/agent-selection'], { queryParams: { date: this.selectedDate } });
    }
  }
}  
