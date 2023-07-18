import { Item } from "./item";
export interface Category {
  name: string;
  showItems: boolean;
  items: Item[];
}

export { Item };
