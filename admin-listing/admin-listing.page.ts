import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

interface Category {
  name: string;
  items: Item[];
  showItems: boolean;
}

interface Item {
  name: string;
  description: string;
  bedrooms: string;
  parking: string;
  bathrooms: string;
  image: string;
}

@Component({
  selector: 'app-admin-listing',
  templateUrl: './admin-listing.page.html',
  styleUrls: ['./admin-listing.page.scss'],
})
export class AdminListingPage {
  categories: Category[] = [];

  constructor(private navCtrl: NavController, private alertController: AlertController) {
    this.initializeCategories();
  }

  initializeCategories() {
    // Initialize your categories and items here
    // Example:
    this.categories = [
      {
        name: 'Category 1',
        items: [
          {
            name: 'Item 1',
            description: 'Description 1',
            bedrooms: '3',
            parking: '2',
            bathrooms: '2',
            image: 'path-to-image-1',
          },
          {
            name: 'Item 2',
            description: 'Description 2',
            bedrooms: '3',
            parking: '2',
            bathrooms: '2',
            image: 'path-to-image-2',
          },
        ],
        showItems: true,
      },
      {
        name: 'Category 2',
        items: [
          {
            name: 'Item 3',
            description: 'Description 3',
            bedrooms: '3',
            parking: '2',
            bathrooms: '2',
            image: 'path-to-image-3',
          },
          {
            name: 'Item 4',
            description: 'Description 4',
            bedrooms: '3',
            parking: '2',
            bathrooms: '2',
            image: 'path-to-image-4',
          },
        ],
        showItems: false,
      },
    ];
  }

  addCategory() {
    this.presentPrompt('New Category', 'Enter the category name', 'category').then((categoryName) => {
      if (categoryName) {
        const category: Category = {
          name: categoryName,
          items: [],
          showItems: false,
        };
        this.categories.push(category);
      }
    });
  }

  removeCategory(category: Category) {
    const index = this.categories.indexOf(category);
    if (index > -1) {
      this.categories.splice(index, 1);
    }
  }

  addItem(category: Category) {
    this.presentPrompt('New Item', 'Enter the item name', 'item').then((itemName) => {
      if (itemName) {
        const item: Item = {
          name: itemName,
          description: '',
          bedrooms: '',
          parking: '',
          bathrooms: '',
          image: '',
        };
        category.items.push(item);
      }
    });
  }

  removeItem(category: Category, item: Item) {
    const index = category.items.indexOf(item);
    if (index > -1) {
      category.items.splice(index, 1);
    }
  }

  toggleItems(category: Category) {
    category.showItems = !category.showItems;
  }

  editItem(item: Item) {
    const category = this.categories.find((c) => c.items.includes(item));
    if (category) {
      this.presentPrompt('Edit Item', 'Enter the updated item name', 'item', item.name).then((newName) => {
        if (newName) {
          item.name = newName;
          this.presentPrompt('Edit Description', 'Enter the updated item description', 'description', item.description).then(
            (newDescription) => {
              if (newDescription) {
                item.description = newDescription;
                this.presentPrompt('Edit Bedrooms', 'Enter the updated number of bedrooms', 'bedrooms', item.bedrooms).then(
                  (newBedrooms) => {
                    if (newBedrooms) {
                      item.bedrooms = newBedrooms;
                      this.presentPrompt('Edit Parking', 'Enter the updated parking details', 'parking', item.parking).then(
                        (newParking) => {
                          if (newParking) {
                            item.parking = newParking;
                            this.presentPrompt('Edit Bathrooms', 'Enter the updated number of bathrooms', 'bathrooms', item.bathrooms).then(
                              (newBathrooms) => {
                                if (newBathrooms) {
                                  item.bathrooms = newBathrooms;
                                  this.presentPrompt('Edit Image', 'Enter the updated item image', 'image', item.image).then((newImage) => {
                                    if (newImage) {
                                      item.image = newImage;
                                    }
                                  });
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      });
    }
  }

  async presentPrompt(
    title: string,
    message: string,
    inputName: string,
    defaultValue: string = ''
  ): Promise<string | undefined> {
    return new Promise<string | undefined>(async (resolve) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        inputs: [
          {
            name: inputName,
            type: 'text',
            value: defaultValue,
            placeholder: 'Enter',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              resolve(undefined);
            },
          },
          {
            text: 'Save',
            handler: (data) => {
              resolve(data[inputName]);
            },
          },
        ],
      });

      await alert.present();
    });
  }
}
