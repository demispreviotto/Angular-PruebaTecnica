import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/productscomponent';
import { ProductsInterface } from '../../interface/products-interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public products: Array<ProductsInterface> = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error("Error fetching products:", error)
      },
    })
  }
}
