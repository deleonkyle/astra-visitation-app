import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    { 
        id:1,
        name: 'Example Property',
    bedrooms: 3,
    parking: 2,
    bathrooms: 2,
    image: 'path/to/image',
    detailsLink: 'details-link',
    description: 'Property description',
    location: 'Property location',
    price: '$500,000', 
},

    { 
        id:2,
        name: 'Example Property',
    bedrooms: 3,
    parking: 2,
    bathrooms: 2,
    image: 'path/to/image',
    detailsLink: 'details-link',
    description: 'Property description',
    location: 'Property location',
    price: '$500,000',
 },
    { 
        id: 3,
        name: 'Example Property',
  bedrooms: 3,
  parking: 2,
  bathrooms: 2,
  image: 'path/to/image',
  detailsLink: 'details-link',
  description: 'Property description',
  location: 'Property location',
  price: '$500,000',
 },
  ];

  getProperties(): Property[] {
    return this.properties;
  }

  getPropertyById(id: number): Property | undefined {
    return this.properties.find(property => property.id === id);
  }

  addProperty(property: Property): void {
    this.properties.push(property);
  }

  updateProperty(property: Property): void {
    const index = this.properties.findIndex(p => p.id === property.id);
    if (index !== -1) {
      this.properties[index] = property;
    }
  }

  deleteProperty(id: number): void {
    this.properties = this.properties.filter(property => property.id !== id);
  }
}
