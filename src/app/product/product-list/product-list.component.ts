import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  @Input ('datos') public products: IProduct[];
  
  imageWidth:number = 150;
  imageMargin: number =10;
  showImage: boolean = false;
  

  toggleImage(): void{
      this.showImage=!this.showImage;
  }

  constructor(
    private productService : ProductService,
    /*private products: IProduct[] */) { }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe((res:any[])=>{
        return this.productService.getProducts().subscribe((res:any[])=>{
          this.productService.products = res;
        },
        err => console.log(err));
    
    })

  }

  updateProduct(id:number,product:IProduct){

    let datos: any ={
      productName: 'Producto' + Math.round(Math.random()*(100-1)+1),
      productCode: this.generarCodigo(),
      releaseDate: '2019-03-07',
      price: Math.round(Math.random()*(130-20)+20),
      description: 'Producto de prueba generado automaticamente',
      starRating: Math.round(Math.random()*(200-1)+1),
      imageUrl:''
    };
    console.log(id);
    console.log(datos);
    
    
    this.productService.updateProduct(id,datos).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[])=>{
        this.productService.products=res;
      },
      err=>console.log(err));
    })

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
  ngOnInit() {
  }

}
