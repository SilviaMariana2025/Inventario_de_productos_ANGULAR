import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.less',
})
export class ProductForm {

  name: string = '';
  price: number | null = null;

  @Output() productCreated = new EventEmitter<any>();

  addProduct() {
    if (!this.name || this.price === null || this.price <= 0) {
      return;
    }

    this.productCreated.emit({
      name: this.name,
      price: this.price
    });

    this.name = '';
    this.price = null;
  }
}
