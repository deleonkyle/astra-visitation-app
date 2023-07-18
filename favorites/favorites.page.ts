import { Component } from '@angular/core';
import { FavoritesService } from '../home2/favorites-service';

@Component({
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  favoriteHouses: string[] = [];

  constructor(private favoritesService: FavoritesService) {
    this.favoritesService.favoriteHouses$.subscribe(houses => {
      this.favoriteHouses = houses;
    });
  }
}
