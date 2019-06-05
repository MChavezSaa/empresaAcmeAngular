import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/producto';
import { ProductService } from '../product.service';
import {ModalAddService} from '../../services/modal-add.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  //@Input('datos')public products:IProduct[];
  imageWidth: number = 100;
  imageMargin: number = 20;
  showImage: boolean = false;
  _listFilter: string;

  constructor(private productService: ProductService,
              private modalAddService: ModalAddService) {}

/*              this.productService.getProducts().subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    },
      err => console.log(err)
    )
  }*/

  toggleImage(): void{
    this.showImage=!this.showImage;
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    },
      err => console.log(err)
    )
    this.productService.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.productService.products;
  }

  deleteProduct(id: number){
    console.log(id);
    this.productService.deleteProduct(id).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[]) => {
        this.productService.products = res;
        //this.filteredProducts = res;
      },
      err => console.log(err));
    })
  }

  updateProduct(id:number, producto:IProduct){
    let datos:any= {
      productName: 'Producto' + Math.round(Math.random() * (100 - 1) + 1),
      productCode: this.productService.generarCodigo(),
      releaseDate: '2019-05-29',
      price: Math.round(Math.random() * (130 - 20) + 20),
      description: 'Producto de prueba 2',
      starRating: Math.round(Math.random() * (200 - 1) + 1),
      imageURL: ''
    }

    this.productService.updateProduct(id, datos).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[])=>{
        this.productService.products = res;
        this.productService.filteredProducts= res;
      },
      err => console.log(err));
    })
  }
 

  today: number = Date.now();

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.productService.filteredProducts =
      this._listFilter ? this.performFilter(this.listFilter) :
        this.productService.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); //convierte todos los caracteres de filtraje en minusculas
    return this.productService.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);// función flecha anonima que recibe como parametro el arreglo productos
  }



  crearProducto() {
    let datos: any = {
      name: 'Producto' + Math.round(Math.random() * (100 - 1) + 1),
      code: this.productService.generarCodigo(),
      date: '2019-05-29',
      price: Math.round(Math.random() * (130 - 20) + 20),
      description: 'Producto de prueba',
      rating: Math.round(Math.random() * (200 - 1) + 1),
      image: ''
    };
    this.guardarProducto(datos);
  }

  guardarProducto(producto: IProduct) {
    this.productService.saveProduct(producto).subscribe(() => {
      return this.productService.getProducts().subscribe((res: any[]) => {
        this.productService.products = res;
       // this.productService.filteredProducts = res;
      },
        err => console.log(err));
    })
  }

  abrirModal() {
    this.modalAddService.mostrarModal();
  }

}
