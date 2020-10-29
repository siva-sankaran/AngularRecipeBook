import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShoppingVisible: boolean;

  OnMenuSelected(selectedMenuName: string){
    this.isShoppingVisible = selectedMenuName === "shopping";
  }
}
