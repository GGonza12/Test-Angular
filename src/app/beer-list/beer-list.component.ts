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
    price: 20,
    stock: 100,
    image: "assets/img/porter.jfif",
    discount: false,
  },
  {
    name : "Negra Fuerte",
    type: "Porter",
    price: 20,
    stock: 100,
    image: "assets/img/porter.jfif",
    discount: true,
  },
  {
    name : "Negra Fuerte",
    type: "Porter",
    price: 20,
    stock: 0,
    image: "assets/img/porter.jfif",
    discount: false,
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
