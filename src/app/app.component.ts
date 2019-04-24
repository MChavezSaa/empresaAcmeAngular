import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empresa ACME';
  products: IProduct [] = [
    {
      "productId": 1,
      "productName": "Zapatillas de lona",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Zapatillas de lona con caña marca Converse.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_1280.png"
  },
  {
      "productId": 2,
      "productName": "Bolso de cuero",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "Bolso de cuero, con forro de seda.",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png"
  },
  {
      "productId": 5,
      "productName": "Reloj antiguo",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Reloj blanco de dos campanillas tipo retro.",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/03/26/12/36/alarm-clock-2175382_1280.jpg"
  },
  {
      "productId": 8,
      "productName": "Cámara fotográfica",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "Cámara fotográfica digital con Zoom óptico y 16 GB de RAM interna",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/02/01/10/47/avatars-2029585_960_720.png"
  },
  {
      "productId": 10,
      "productName": "Taladro de percusión",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Taladro eléctrico de percusión, 200 RPM, marca DrillBill",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/19/30/power-drill-154903_1280.png"
  }
  ];  ;
}
