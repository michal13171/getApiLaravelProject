import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../Models/Product";

@Component({
  selector: 'app-view-max-data-value',
  templateUrl: './view-max-data-value.component.html',
  styleUrls: ['./view-max-data-value.component.scss']
})
export class ViewMaxDataValueComponent implements OnInit {
  title = 'Lista wszystkich produktów powyżej 5 sztuk';
  products: Product[];
  noResult: [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getMaxAmountProductByFive();
  }
  getMaxAmountProductByFive(){
    this.productService
      .getMaxAmountProductByFive()
      .subscribe(
        products => this.products = products,
      );
  }

}
