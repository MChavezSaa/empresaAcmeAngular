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
  title = 'Empresa Acme';
  _listFilter : string;


  constructor(
      private productService : ProductService,
      private modalAddService: ModalAddService) {  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return  this.productService.products.filter((product: IProduct)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit():void{
    
    this.productService.getProducts().subscribe((res:any[])=>{
          this.productService.products=res;
          this.productService.filteredProducts = res;
          console.log(this.productService.products);
            
        }, 
    err => console.log(err)
    )
    this.productService.filteredProducts = this.productService.products;

  }

  crearProducto(){
    let datos: any ={
      name: 'Producto' + Math.round(Math.random()*(100-1)+1),
      code: this.productService.generarCodigo(),
      date: '2019-03-07',
      price: Math.round(Math.random()*(130-20)+20),
      description: 'Producto de prueba generado automaticamente',
      rating: Math.round(Math.random()*(200-1)+1),
      image:''
    };
    this.guardarProducto(datos);
  }

  /*generarCodigo(): string {
    
    return this.rand_code('ABCDEFGHIJKLMNOPQRSTUVWXYZ',3) + '-'+ this.rand_code('0123456789',4);

  }*/

  /*rand_code(code: string, num: number){
    let resp="";
    for (let index = 0; index < num; index++) {
       resp +=code.charAt(Math.random()*(code.length)); 
    }  
    return resp;
  }*/
  
  guardarProducto(producto: IProduct){
    this.productService.saveProduct(producto).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[])=>{
        this.productService.products=res;
        this.productService.filteredProducts=res;
      },
      err => console.log(err));
    })
  }
  
  public get listFilter() : string {
    return this._listFilter;
  }
  
  public set listFilter(v : string) {
    this._listFilter = v;
    this.productService.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.productService.products;
  }

  abrirModal(){
    this.modalAddService.mostrarModal();
  }
  
}
/** hacer modificaciones 
 * - hacer que la lista de productos sea parte del productService

*/