import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ToastController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  swiperModules = [IonicSlides];
  constructor() {}
  swiperSlideChanged(e: any){
    console.log('changed: ',e);
  }
}
