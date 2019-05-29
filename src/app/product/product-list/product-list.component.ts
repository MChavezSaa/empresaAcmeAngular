import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input ('datos') public products: IProduct[];
  
  imageWidth:number = 150;
  imageMargin: number =10;
  showImage: boolean = false;
  

  toggleImage(): void{
      this.showImage=!this.showImage;
  }

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(()=>{
      return this.productService.getProducts().subscribe((res: any[])=>{
        this.products= res;
        //this.filteredProducts=res;
      },
      err => console.log(err));
    });
  }

}
