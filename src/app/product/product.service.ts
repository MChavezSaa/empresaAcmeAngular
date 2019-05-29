import { Injectable } from '@angular/core';
import { IProduct } from '../product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/productos').pipe(map((res:any)=>res.data));

    /* 
    return [
      {
        "productId": 1,
        "productName": "Zapatillas de lona",
        "productCode": "GDN-0011",
        "releaseDate":"2019-03-24",
        "price":150.25,
        "description":"Zapatillas de lona con caña verde",
        "starRating":100,
        "imageUrl":"https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png"
      },
  
      {
        "productId": 2,
        "productName": "Kit de dibujo",
        "productCode": "GDN-0222",
        "releaseDate": "2019-03-24",
        "price":5000,
        "description":"Kit de dibujo,regla, lápiz, goma sacapuntas",
        "starRating": 150,
        "imageUrl":"https://cdn.pixabay.com/photo/2016/03/09/15/26/ruler-1246653_960_720.jpg"
      },
      
      {
        "productId": 3,
        "productName": "Lápices de colorear",
        "productCode": "GDN-0333",
        "releaseDate": "2019-03-24",
        "price":1500,
        "description":"Set de 21 lápices de madera para colorear",
        "starRating": 80,
        "imageUrl":"https://cdn.pixabay.com/photo/2010/12/13/09/59/artistic-2063_960_720.jpg"
      },
  
      {
        "productId": 4,
        "productName": "Pan",
        "productCode": "GDN-0444",
        "releaseDate": "2019-03-24",
        "price":150,
        "description":"Ricos pancitos",
        "starRating": 40,
        "imageUrl":"https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_960_720.jpg"
      },
      
      {
        "productId": 5,
        "productName": "Tijeras",
        "productCode": "GDN-0555",
        "releaseDate": "2019-03-24",
        "price":25.30,
        "description":"Tijeras metáñicas",
        "starRating": 20,
        "imageUrl":"https://cdn.pixabay.com/photo/2016/03/31/23/11/scissors-1297454_960_720.png"
      }
  
  
    ] ; */
  }

     /*  */
}
