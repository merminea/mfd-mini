import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <site-header></site-header>

  <router-outlet></router-outlet>

  <recipe-footer></recipe-footer>

  `,
})
export class AppComponent  { name = 'Angular'; }
