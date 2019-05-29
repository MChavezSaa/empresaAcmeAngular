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
  }
  saveProduct(product: IProduct){
     return this.http.post<IProduct[]>('http://localhost:3000/producto',product);
  }
}
