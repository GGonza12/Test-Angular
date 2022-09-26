import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { CartComponent } from '../cart/cart.component';
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
    name : "Forte Black",
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

  constructor(private cart: BeerCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(beer : any): void{

    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity =0;
  }

  maxReached(m: string){
    alert(m);
  }



}
