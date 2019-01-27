import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "../Models/Product";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

const API_URL: string = 'http://michal.dev.project/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL+'api/product', httpOptions)
      .pipe(
        map(res => res['data']),
      );
  }
  getProduct (id: number): Observable<Product> {
    return this.http.get<Product>(API_URL+'api/product/'+id, httpOptions)
      .pipe(
        map(res => res),
      );
  }
  getMaxAmountProductByFive (): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL+'api/product/max/value', httpOptions)
      .pipe(
        map(res => res['data']),
      );
  }
  getAmountProductByNone (): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL+'api/product/none/value', httpOptions)
      .pipe(
        map(res => res['data']),
      );
  }
}
