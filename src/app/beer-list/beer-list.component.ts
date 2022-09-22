import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer = {
    name : "Negra Fuerte",
    type: "Porter",
    price: 20,
    stock: 100,
    image: "assets/img/porter.jfif"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
