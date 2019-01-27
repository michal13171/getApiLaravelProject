import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../Models/Product";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}
