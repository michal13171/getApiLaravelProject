import {Component, OnInit} from '@angular/core';
import {Product} from "../../Models/Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'Lista wszystkich produktów na stanie';
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService
      .getProducts()
      .subscribe(
        products => this.products = products,
      );
  }
}
