import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./Product/product/product.component";
import {DetailsComponent} from "./Product/details/details.component";
import {NoneAmountComponent} from "./Product/none-amount/none-amount.component";
import {ViewMaxDataValueComponent} from "./Product/view-max-data-value/view-max-data-value.component";

const routes: Routes = [
  { path: '', component: ProductComponent, pathMatch: 'full'},
  { path: 'product/:id', component: DetailsComponent },
  { path: 'product/max/amount', component: ViewMaxDataValueComponent },
  { path: 'product/null/amount', component: NoneAmountComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
