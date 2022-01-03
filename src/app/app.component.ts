import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorCubesApp';

  mobile : boolean =false;

  ngOnInit() {
    if (window.screen.width <= 360) {
      this.mobile = true;
    }else{
      this.mobile = false;
    }
    
  }
}

