import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input('datos') public products: IProduct[];
imageWidth: number=150;
imageMargin: number=5;
showImage: boolean = false;

toggleImage():void{
  this.showImage=!this.showImage;
}
  constructor() { }

  ngOnInit() {
  }

}
