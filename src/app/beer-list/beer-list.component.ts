import { Component, OnInit } from '@angular/core';
import  { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
   beers: Beer[] = [ {
    name : "Negra Fuerte",
    type: "Porter",
    price: 40,
    stock: 7,
    image: "assets/img/porter.jfif",
    discount: false,
    quantity:0,
  },
  {
    name : "Negra Fuerte",
    type: "Porter",
    price: 35,
    stock: 5,
    image: "assets/img/porter.jfif",
    discount: true,
    quantity:0,
  },
  {
    name : "Negra Forte",
    type: "Portera",
    price: 50,
    stock: 0,
    image: "assets/img/porter.jfif",
    discount: false,
    quantity:0,
  },
];
  constructor() { }

  ngOnInit(): void {
  }
  maxReached(m: string){
    alert(m);
  }


}
