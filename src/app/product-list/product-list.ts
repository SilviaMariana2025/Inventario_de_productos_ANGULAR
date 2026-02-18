import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.less',
})
export class ProductList {

  @Input() products: any[] = [];
  @Output() productDeleted = new EventEmitter<number>();

  delete(id: number) {
    this.productDeleted.emit(id);
  }
}
