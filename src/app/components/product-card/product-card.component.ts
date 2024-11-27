import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  color = input.required<string>();
}

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}
// {} => á#°
// [] => shift + á#°
// ``(Backtics) => Alt Gr + ú§
// ''(comillas simples) => ?