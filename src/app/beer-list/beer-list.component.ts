import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';
import { CartComponent } from '../cart/cart.component';
import  { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
   beers: Beer[] = [];

  constructor(
    private cart: BeerCartService,
    private beersDataService : BeerDataService) { 
  }

  ngOnInit(): void {
    this.beersDataService.getAll()
    .subscribe(beers => this.beers = beers);
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
