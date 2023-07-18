import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PropertyService } from '../admin.home/property.service';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-add-property-modal',
  templateUrl: './add-property-modal.page.html',
  styleUrls: ['./add-property-modal.page.scss'],
})
export class AddPropertyModalPage {
  property: Property = {
    id: 1,
    name: '',
    bedrooms: 0,
    parking: 0,
    bathrooms: 0,
    image: '',
    detailsLink: '',
    description: '',
    location: '',
    price: '',
    // Add any additional properties as needed
  };
  constructor(
    private modalController: ModalController,
    private propertyService: PropertyService
  ) {}

  saveProperty() {
    // Generate a new ID (You may need to use a different approach in a real application)
    this.property.id = Date.now();

    // Add the property
    this.propertyService.addProperty(this.property);

    // Dismiss the modal with the newly created property as the result
    this.modalController.dismiss(this.property);
  }

  dismissModal() {
    // Dismiss the modal without any result
    this.modalController.dismiss();
  }
}
