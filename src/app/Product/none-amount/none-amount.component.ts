import { Component, OnInit } from '@angular/core';
import {Product} from "../../Models/Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-none-amount',
  templateUrl: './none-amount.component.html',
  styleUrls: ['./none-amount.component.scss']
})
export class NoneAmountComponent implements OnInit {
  title = 'Lista wszystkich produktów których nie ma na stanie';
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAmountByNoneOfProduct();
  }

  getAmountByNoneOfProduct(){
    this.productService
      .getAmountProductByNone()
      .subscribe(
        products => this.products = products,
      );
  }
}
