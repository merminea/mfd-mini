import { Component,OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { DemoDataService } from '../shared/demo-data.service';

@Component({
	selector: 'recipe-list',
	templateUrl: './app/recipe/recipe-list.component.html'
})
export class RecipeListComponent implements OnInit{ //we put export so we can use it anywhere else
	recipes:IRecipe[];
	pagetitle: string ="Recipes";

	constructor(private demoDataService: DemoDataService){


	}

	ngOnInit(){
		this.recipes = this.demoDataService.getDemoData();
	}

}