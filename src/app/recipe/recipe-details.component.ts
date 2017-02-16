import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { IRecipe } from './recipe';
import { DemoDataService } from '../shared/demo-data.service';


@Component({

    templateUrl: './app/recipe/recipe-details.component.html'
})

export class RecipeDetailComponent{
    recipeid: number;
    recipe: IRecipe;
    
    constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _demoDataService: DemoDataService){

    }
    
    ngOnInit(){
        this.recipeid = +this._route.snapshot.params['id'];
        this.recipe = this._demoDataService.getDemoDataById(this.recipeid);
    }
}