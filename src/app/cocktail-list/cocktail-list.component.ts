import { Component, OnInit } from '@angular/core';
import { cocktail } from '../models/cocktail.model';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
cocktails: any[]  = [];
  constructor(public cocktailService:CocktailServiceService) { }

  ngOnInit(): void {
    this.cocktails = [...this.cocktailService.getCocktails()]

  }

}
