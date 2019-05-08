import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
@Input() rating : number =100;
stars: number= 4;
arr: any = new Array (this.stars).fill(1);
}
