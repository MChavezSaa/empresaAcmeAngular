import { Component  } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product/product.service';
import { ModalAddService } from './service/modal-add.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'ACME web Page';
  _listFilter : string;
  filteredProducts: IProduct[];
  products: IProduct [];

  constructor(private productService : ProductService,
      private modalAddService: ModalAddService) {  }

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
    this.filteredProducts = this.products;

  }

  crearProducto(){
    let datos: any ={
      name: 'Producto' + Math.round(Math.random()*(100-1)+1),
      code: this.generarCodigo(),
      date: '2019-03-07',
      price: Math.round(Math.random()*(130-20)+20),
      description: 'Producto de prueba generado automaticamente',
      rating: Math.round(Math.random()*(200-1)+1),
      image:''
    };
    this.guardarProducto(datos);
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
  
  guardarProducto(producto: IProduct){
    this.productService.saveProduct(producto).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[])=>{
        this.products=res;
        this.filteredProducts=res;
      },
      err => console.log(err));
    })
  }
  
  public get listFilter() : string {
    return this._listFilter;
  }
  
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;
  }

  abrirModal(){
    this.modalAddService.mostrarModal();
  }
  
}
/** hacer modificaciones 
 * - hacer que la lista de productos sea parte del productService

*/