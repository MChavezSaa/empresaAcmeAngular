import { Injectable } from '@angular/core';
import { IProduct } from '../product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  public filteredProducts: IProduct[];
  public products: IProduct [];

  constructor(private http: HttpClient) { }

  saveProduct(product: IProduct){
    return this.http.post<IProduct[]>('http://localhost:3000/producto',product);

  }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/productos').pipe(map((res:any)=>res.data));
  }
  deleteProduct(id){
    return this.http.delete("http://localhost:3000/producto/"+id);
  }

 /* updateProduct(id,product){
    return this.http.put("http://localhost:3000/producto/"+id,product);
  }*/
  updateProduct(id, product){
    console.log("probando" + id + product);
    return this.http.put('http://localhost:3000/producto/'+ id,product)//this.http.put('http://localhost:3000/producto/'+ id , product);
    
  }

  generarCodigo(): string {
   
    return this.rand_code('ABCDEFGHIJKLMNOPQRSTUVWXYZ',3) + '-'+ this.rand_code('0123456789',4);

  }

  rand_code(code: string, num: number){
    let resp="";
    for (let index = 0; index < num; index++) {
       resp +=code.charAt(Math.random()*(code.length)); 
    }  
    return resp;
  }
}
