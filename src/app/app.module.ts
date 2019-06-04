import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StarComponent } from './product/product-list/star/star.component';

import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';
import { DefaultPipe } from './default.pipe'
import { HttpClientModule } from '@angular/common/http';
import { ModalAddComponent } from './service/modal-add/modal-add.component';

registerLocaleData(localeEsCl,'es-CL')

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    DefaultPipe,
    ModalAddComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue:'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
