import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input('datos') public products: IProduct[];

  constructor() { }

  ngOnInit() {
  }

}
