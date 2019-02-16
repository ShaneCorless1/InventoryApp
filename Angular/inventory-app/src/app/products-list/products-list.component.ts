import {
   Component,
   EventEmitter,
   Input,
   Output
   } from '@angular/core';
   import { Product } from '../product';
  
   /**
  10 * @ProductsList: A component for rendering all ProductRows and
  11 * storing the currently selected Product
  How Angular Works 105
  12 */
   @Component({
   selector: 'products-list',
   templateUrl: './products-list.component.html'
   })
   export class ProductsListComponent {
   /**
   * @input productList - the Product[] passed to us
   */
   @Input() productList: Product[];
  
   /**
  24 * @output onProductSelected - outputs the current
  25 * Product whenever a new Product is selected
  26 */
   @Output() onProductSelected: EventEmitter<Product>;
  
   /**
  30 * @property currentProduct - local state containing
  31 * the currently selected `Product`
  32 */
   private currentProduct: Product;
  
   constructor() {
   this.onProductSelected = new EventEmitter();
   }
  
   clicked(product: Product): void {
   this.currentProduct = product;
   this.onProductSelected.emit(product);
   }
  
   isSelected(product: Product): boolean {
   if (!product || !this.currentProduct) {
   return false;
   }
   return product.sku === this.currentProduct.sku;
   }
  
   }
  