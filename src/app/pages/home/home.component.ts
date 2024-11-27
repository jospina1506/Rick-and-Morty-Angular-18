import { Component } from '@angular/core';
import { Product, ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{ 
  productList: Product[] = [
    {
      name: 'Arroz',
      description: 'Arroz de grano largo',
      price: 2.50,
      image: 'img/arroz.jpeg'
    },
    {
      name: 'Leche',
      description: 'Leche entera',
      price: 1.20,
      image: 'img/leche.jpeg'
    },
    {
      name: 'Huevos',
      description: 'Docena de huevos',
      price: 3.00,
      image: 'img/huevos.jpeg'
    },
    {
      name: 'Pan',
      description: 'Pan tajado',
      price: 1.50,
      image: 'img/pan.jpeg'
    },
    {
      name: 'Atún',
      description: 'Lata de atún',
      price: 2.20,
      image: 'img/atun.jpeg'
    },
    {
      name: 'Chocolate',
      description: 'Chocolate en barra',
      price: 1.80,
      image: 'img/chocolate.jpeg'
    },
    {
      name: 'Salchicha',
      description: 'Paquete de salchicha',
      price: 1.90,
      image: 'img/chocolate.jpeg'
    }
    
  ];
}