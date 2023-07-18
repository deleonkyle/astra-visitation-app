import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FavoritesService } from './favorites-service';
import { Category } from './category';
import { Item } from './item';
import { NotificationModalPage } from '../notification-modal/notification-modal.page';
import { ModalController } from '@ionic/angular';
import { SharedDataService } from '../house-reservation/shared-data.service';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page {
  favoriteHouses: string[] = [];
  noResultsFound = false;
  searchTerm = '';
  notificationCount = 3;
  notifications: string[] = ['New message received', 'Notification 2', 'Notification 3'];
  categories: Category[] = [
    {
      name: 'Single Detached',
      showItems: true,
      items: [
        {
          name: 'The Manor',
          bedrooms: '3',
          parking: '2',
          bathrooms: '2',
          image: 'assets/houses/Manor.jpg',
          detailsLink: '/manor-details',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'City, Country',
          price: '$500,000',
        },
        {
          name: 'Priveo',
          bedrooms: '3',
          parking: '2',
          bathrooms: '2',
          image: 'assets/houses/priveo1.jpg',
          detailsLink: '/priveo-details',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'City, Country',
          price: '$400,000',
        },
        {
          name: 'Alessa',
          bedrooms: '3',
          parking: '2',
          bathrooms: '2',
          image: 'assets/houses/alessa.jpg',
          detailsLink: '/alessa-details',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'City, Country',
          price: '$400,000',
        },
        {
          name: 'Amina',
          bedrooms: '3',
          parking: '2',
          bathrooms: '2',
          image: 'assets/houses/amina1.jpg',
          detailsLink: '/amina-details',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'City, Country',
          price: '$500,000',
        },
      ],
    },
    {
      name: 'Townhouse',
      showItems: false,
      items: [
        {
          name: 'The Villas',
          bedrooms: '2',
          parking: '1',
          bathrooms: '1',
          image: 'assets/houses/villas.jpg',
          detailsLink: '/villas-details',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'City, Country',
          price: '$300,000',
        },
        // Add more items...
      ],
    },
    {
      name: 'Duplex',
      showItems: false,
      items: [
        {
          name: 'Angeli',
          bedrooms: '2',
          parking: '1',
          bathrooms: '1',
          image: 'assets/houses/angeli.jpg',
          detailsLink: '/angeli-details',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'City, Country',
          price: '$200,000',
        },
        // Add more items...
      ],
    },
  ];

  selectedDate: string = '';
  selectedAgent: any = null; // Add this line

  constructor(
    private favoritesService: FavoritesService,
    private modalController: ModalController,
    private sharedDataService: SharedDataService
  ) {
    // Subscribe to changes in selectedAgent and selectedDate
    // Subscribe to changes in selectedAgent and selectedDate$
    this.sharedDataService.selectedDate$.subscribe((date: string) => {
      this.updateNotificationCount();
    });
    this.sharedDataService.selectedAgent$.subscribe((agent: any) => {
      this.updateNotificationCount();
    });
  }

  // Function to update the notification count based on selectedAgent and selectedDate
  updateNotificationCount() {
    const selectedAgent = this.sharedDataService.getSelectedAgent();
    const selectedDate = this.sharedDataService.getSelectedDate();
    // Increment notification count if both selectedAgent and selectedDate are available
    this.notificationCount = selectedAgent && selectedDate ? 1 : 0;
  }
  
  
  handleSearch(event: any) {
    this.searchTerm = event.detail.value.toLowerCase();
    let anyMatch = false;

    this.categories.forEach((category) => {
      category.showItems = category.items.some((item: Item) =>
        item.name.toLowerCase().includes(this.searchTerm)
      );
      if (category.showItems) {
        anyMatch = true;
      }
    });

    this.noResultsFound = !anyMatch;
  }

  isFavorite(houseTitle: string): boolean {
    return this.favoriteHouses.includes(houseTitle);
  }

  toggleFavorite(houseTitle: string) {
    const isFavorite = this.isFavorite(houseTitle);

    if (isFavorite) {
      this.favoritesService.removeFromFavorites(houseTitle);
      this.favoriteHouses = this.favoriteHouses.filter((house) => house !== houseTitle); // Remove the house from the favoriteHouses array
    } else {
      this.favoritesService.addToFavorites(houseTitle);
      this.favoriteHouses.push(houseTitle); // Add the house to the favoriteHouses array
    }
  }

  toggleCategory(category: Category) {
    this.categories.forEach((cat) => {
      if (cat === category) {
        cat.showItems = !cat.showItems;
      } else {
        cat.showItems = false;
      }
    });
  }
  async openNotificationModal() {
    const selectedDate = this.sharedDataService.getSelectedDate();
    const selectedAgent = this.sharedDataService.getSelectedAgent();
  
    this.notificationCount = 0;

    const modal = await this.modalController.create({
      component: NotificationModalPage,
      componentProps: {
        selectedDate,
        selectedAgent
      }
    });
    
  modal.onDidDismiss().then(() => {
    this.notificationCount = 0;
  });
  
    await modal.present();
    
  }
  
}
