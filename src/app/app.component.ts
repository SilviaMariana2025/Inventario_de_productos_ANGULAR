import { Component } from '@angular/core';
import { Product } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: Product[] = [];

  addProduct(newProduct: Product) {
    newProduct.id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    this.products.push(newProduct)
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  get total() {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
