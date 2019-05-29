import { Component  } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product/product.service';


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
  
}
