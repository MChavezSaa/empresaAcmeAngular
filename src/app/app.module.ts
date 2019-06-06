import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StarComponent } from './product/product-list/star/star.component';

import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';
import { DefaultPipe } from './default.pipe'
import { HttpClientModule } from '@angular/common/http';
import { ModalAddComponent } from './service/modal-add/modal-add.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


registerLocaleData(localeEsCl,'es-CL')

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
      //mas específicas primero, más general al final
      {path: 'product/product-list', component: ProductListComponent},
      {path: 'welcome',component:WelcomeComponent},
      {path: '', redirectTo:'welcome',pathMatch:'full'},
      {path: '**', component:PageNotFoundComponent}

    ])
  ],
  providers: [{provide: LOCALE_ID, useValue:'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*por hacer:
  -arreglar el filter
  - hacer funcionar el buscar por código (debe haber problema en el servidor c:)
*/