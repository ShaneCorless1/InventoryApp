import { Component, OnInit } from '@angular/core';
import{Product} from'../product';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-inventory',
  template: `<div class="inventory-app">
 <h1>{{product.name}}</h1>
 <span>{{product.sku}}</span>
  </div>
  `,
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
product:Product;

  constructor() { 

    this.product= 
    new Product('NICEHAT', // sku
    'A Nice Black Hat', // name
    '/assets/images/products/black-hat.jpg', // imageUrl
    ['Men', 'Accessories', 'Hats'], // department
    29.99);

  }

  ngOnInit() {
  }

}
