import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductForm } from './product-form/product-form';
import { ProductList } from './product-list/product-list';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    CommonModule,
    ProductForm,
    ProductList
  ]
})
export class AppComponent {

  products: Product[] = [];
  nextId = 1;

  addProduct(product: Product) {
    product.id = this.nextId++;
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  get totalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
