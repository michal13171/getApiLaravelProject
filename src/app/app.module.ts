import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Product/product/product.component';
import { HttpClientModule }    from '@angular/common/http';
import { DetailsComponent } from './Product/details/details.component';
import { ViewMaxDataValueComponent } from './Product/view-max-data-value/view-max-data-value.component';
import { NoneAmountComponent } from './Product/none-amount/none-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailsComponent,
    ViewMaxDataValueComponent,
    NoneAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
