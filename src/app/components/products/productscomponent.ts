import { Component, Input, OnInit } from '@angular/core';
import { ProductsInterface } from '../../interface/products-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  @Input() products: ProductsInterface[] = [];
}
