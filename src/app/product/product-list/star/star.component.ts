import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
rating : number =100;
stars: number= 4;
arr: any = new Array (this.stars).fill(1);
}
