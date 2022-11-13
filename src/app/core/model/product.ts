import {Category} from './category';
import { Configuration } from './configuration';

export class Product{

  id?: number = undefined;
  name?: string;
  fileName?: string;
  price?:number = undefined;
  category? : Category;
  configs: Configuration[] = [];

}
