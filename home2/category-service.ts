import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    // Your category data here
  ];

  constructor() { }
}
