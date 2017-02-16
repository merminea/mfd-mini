
import { Injectable } from '@angular/core'
import { RECIPEDATA } from './data'
import { IRecipe } from '../recipe/recipe'

@Injectable()
export class DemoDataService {
    getDemoData() : IRecipe[]{
        return RECIPEDATA;
    }

    getDemoDataById(recipeid: number){
        return RECIPEDATA.find(r => r.id == recipeid)
    }
}