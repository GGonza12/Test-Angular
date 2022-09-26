import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from './beer-list/Beer';

const URL = 'https://61ba505548df2f0017e5aa60.mockapi.io/beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]>{
    return this.http.get<Beer[]>(URL)
    .pipe(
      tap((beers: Beer[])=>beers.forEach(beer => beer.quantity =0))
    );
  }
}
