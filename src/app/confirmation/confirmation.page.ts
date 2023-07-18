import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  public selectedDate: string = '';
  public selectedAgent: any = null;
  public countdown: number = 10;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Retrieve query parameters
    this.route.queryParams.subscribe((params) => {
      if (params && params['date'] && params['agent']) {
        this.selectedDate = params['date'];
        this.selectedAgent = JSON.parse(params['agent']);
      }
    });

    // Start countdown timer
    this.startCountdown();
  }

  startCountdown() {
    setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        this.redirectToHome2();
      }
    }, 1000);
  }

  redirectToHome2() {
    this.router.navigate(['/home2']);
  }
}
