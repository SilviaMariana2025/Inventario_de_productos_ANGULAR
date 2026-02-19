import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter<Product>();

  name: string = '';
  price: number = 0;

  submitProduct() {
    if (this.name.trim() && this.price > 0) {
      this.productCreated.emit({ id: 0, name: this.name, price: this.price });
      this.name = '';
      this.price = 0;
    }
  }
}
