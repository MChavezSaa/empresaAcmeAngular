import { Component } from '@angular/core';
import { IProduct } from './product';
import {OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Empresa ACME';
  _listFilter: string;
  filteredProducts: IProduct[];

get listFilter():string{
  return this._listFilter;
}

set listFilter(value: string){
  this.listFilter ? this.performFilter(this.listFilter): this.products;
}

performFilter(filterBy: string): IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) => 
  product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
}

ngOnInit(): void{
  this.filteredProducts= this.products;
}

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Zapatillas de lona",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Zapatillas de lona con caña marca Converse.",
      "price": 19.95,
      "starRating": 33.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/10/05/09/12/shoes-2818757_960_720.png"
  },
  {
      "productId": 2,
      "productName": "Bolso de cuero",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "Bolso de cuero, con forro de seda.",
      "price": 32.99,
      "starRating": 44.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_960_720.jpg"
  },
  {
      "productId": 5,
      "productName": "Reloj antiguo",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Reloj blanco de dos campanillas tipo retro.",
      "price": 8.9,
      "starRating": 14.8,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/01/08/22/27/alarm-1964166_960_720.jpg"
  },
  {
      "productId": 8,
      "productName": "Cámara fotográfica",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "Cámara fotográfica digital con Zoom óptico y 16 GB de RAM interna",
      "price": 11.55,
      "starRating": 83.7,
      "imageUrl": "https://cdn.pixabay.com/photo/2018/01/28/21/14/lens-3114729_960_720.jpg"
  },
  {
      "productId": 10,
      "productName": "Taladro de percusión",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Taladro eléctrico de percusión, 200 RPM, marca DrillBill",
      "price": 35.95,
      "starRating": 94.6,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/19/30/power-drill-154903_960_720.png"
  }
  ];  ;
}
