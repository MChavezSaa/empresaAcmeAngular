import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {from} from 'rxjs';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { StarComponent } from './product/product-list/star/star.component';
import {registerLocaleData} from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';
import { DefaultPipe } from './image.pipes';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddComponent } from './services/modal-add/modal-add.component';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeEsCL,'es-CL');


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    DefaultPipe,
    ModalAddComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'product/product-list', component: ProductListComponent},
      { path: 'Welcome', component: WelcomeComponent },
      { path: '', redirectTo:'welcome', pathMatch:'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
