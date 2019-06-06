import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';
import { ProductService } from '../product.service';
import { ModalAddService } from 'src/app/service/modal-add.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {


  title = 'ACME web Page';
  imageWidth: number = 150;
  imageMargin: number = 10;
  showImage: boolean = false;
  _listFilter: string;

  constructor(
    public productService: ProductService,
    private modalAddService: ModalAddService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res: any[]) => {
        this.productService.products = res;
        this.productService.filteredProducts = res;
        console.log(this.productService.products);

    },err => console.log(err)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(v: string) {
    this._listFilter = v;
    this.productService.filteredProducts = 
        this.listFilter ? this.performFilter(this.listFilter) : this.productService.products;
      console.log(this.productService.filteredProducts);
      
  }

  abrirModal() {
    this.modalAddService.mostrarModal();
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productService.products.filter(
      (product: IProduct) =>
        (product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
      );
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (res: any[]) => {
      return this.productService.getProducts().subscribe(
        (res: any[]) => {
          this.productService.filteredProducts=res;
          this.productService.products = res;
        },
        err => console.log(err))

      });
  }

  updateProduct(id: number, product: IProduct) {
    this.productService.updateProduct(id, product).subscribe(
      (res: any[]) => {
        return this.productService.getProducts().subscribe(
          (res: any[]) => {
            this.productService.filteredProducts=res;
            this.productService.products = res;
          }, err => console.log(err))
      });
  }

  crearProducto() {
    let datos: any = {
      name: ' Nuevo Producto' + Math.round(Math.random() * (100 - 1) + 1),
      code: this.productService.generarCodigo(),
      date: '2019-03-07',
      price: Math.round(Math.random() * (130 - 20) + 20),
      description: 'Producto de prueba generado automaticamente',
      rating: Math.round(Math.random() * (200 - 1) + 1),
      image: ''
    };
    this.guardarProducto(datos);
  }

  guardarProducto(producto: IProduct) {
    this.productService.saveProduct(producto).subscribe(
      () => this.productService.getProducts().subscribe(
        (res: any[]) => {
          this.productService.products = res;
          this.productService.filteredProducts = res;
        }, err => console.log(err)));
  }



}




