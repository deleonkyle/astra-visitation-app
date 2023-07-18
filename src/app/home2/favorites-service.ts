import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteHousesSubject = new BehaviorSubject<string[]>([]);
  favoriteHouses$ = this.favoriteHousesSubject.asObservable();
  getFavoriteHouses(): string[] {
    return this.favoriteHousesSubject.value;
  }
  

  constructor() { }

  addToFavorites(houseTitle: string) {
    const currentFavorites = this.favoriteHousesSubject.value;
    const updatedFavorites = [...currentFavorites, houseTitle];
    this.favoriteHousesSubject.next(updatedFavorites);
  }

  removeFromFavorites(houseTitle: string) {
    const currentFavorites = this.favoriteHousesSubject.value;
    const updatedFavorites = currentFavorites.filter(title => title !== houseTitle);
    this.favoriteHousesSubject.next(updatedFavorites);
  }
}
