import { Component  } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product/product.service';
import { CodeNode } from 'source-list-map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Empresa ACME';
  _listFilter : string;
  filteredProducts: IProduct[];
  products: IProduct [];
  constructor(private productService : ProductService ) {  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return  this.products.filter((product: IProduct)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit():void{
    this.productService.getProducts().subscribe((res:any[])=>{
          this.products=res;
          this.filteredProducts = res;
          console.log(this.products);
        }, 
    err => console.log(err)
    )

  }
  public get listFilter() : string {
    return this._listFilter;
  }
  
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;
  }
  
  crearProducto(){
    let datos: any ={
      name: 'Producto'+ Math.round(Math.random()* (100-1)+1),
      code: this.generarCodigo(),
      date: '2019-03-07',
      price: Math.round(Math.random()*(130-20)+20),
      description: 'Producto de prueba',
      rating:Math.round(Math.random()*(200-1)+1),
      image:''
    };
    this.guardarProducto(datos);
  }
  rand_code(chars, lon): string {
    let code="";
    for(let x=0; x<lon;x++){
      let rand= Math.floor(Math.random()* chars.length);
      code+= chars.substr(rand,1);
    }
    return code;
  };

generarCodigo(): string{
  return this.rand_code('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',3) + '-' + this.rand_code('0123456789',4);
};

guardarProducto(producto: IProduct){
  this.productService.saveProduct(producto).subscribe(()=> {
    return this.productService.getProducts().subscribe((res: any[])=> {
      this.products= res;
      this.filteredProducts= res;
    });
  });
}

}
