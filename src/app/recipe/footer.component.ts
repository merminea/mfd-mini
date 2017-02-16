import { Component } from '@angular/core';
@Component({
	selector: 'recipe-footer',
	templateUrl: './app/recipe/footer.component.html'
})
export class FooterComponent{ //we put export so we can use it anywhere else
	footers:any = [{
		name: "this is not a cake, but a footer",
		description: "A FOOTER",
    }]
}