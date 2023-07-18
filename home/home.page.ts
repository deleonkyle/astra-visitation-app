import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  swiperModules = [IonicSlides];

  constructor() {}
  swiperSlideChanged(e: any){
    console.log('changed: ',e);
  }

}
