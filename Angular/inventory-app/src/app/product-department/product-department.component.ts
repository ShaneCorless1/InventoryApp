import {
   Component,
   Input
   } from '@angular/core';
   import { Product } from '../product';
  
  /**
  8 * @ProductDepartment: A component to show the breadcrumbs to a
  9 * Product's department
  10 */
   @Component({
   selector: 'product-department',
   templateUrl: './product-department.component.html'
  
   })
   export class ProductDepartmentComponent {
   @Input() product: Product;
   }