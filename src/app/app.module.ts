import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RecipeListComponent } from './recipe/recipe-list.component';
import { FooterComponent } from './recipe/footer.component';
import { StarRatingComponent } from './shared/star-rating.component';
import { HeaderComponent } from './shared/header.component';
import { RecipeDetailComponent } from './recipe/recipe-details.component';
import { ContactComponent } from './contact/contact.component';
import { DemoDataService } from './shared/demo-data.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'home', component:RecipeListComponent },
      { path: 'recipe/:id', component: RecipeDetailComponent},
      { path: 'contact', component: ContactComponent}, //link to individual page
      { path:'', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
    ],
  declarations: [ AppComponent, RecipeListComponent, FooterComponent, StarRatingComponent, HeaderComponent, RecipeDetailComponent, ContactComponent ],
  providers: [ DemoDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
