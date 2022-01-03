import { colors_available, colors_to_show } from './../colors_data';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  colors_available = colors_available
  colors_to_show = colors_to_show
  mobile : boolean = false

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) {}

  getRouterUrl(){
    return this.router.url    
  }

  goToPage(page:any){
    this.router.navigate([page])
  }

  colorsToShowChanged(color:string){
    if (colors_to_show.includes(color)){
      let indexOfColor = colors_to_show.indexOf(color);
      colors_to_show.splice(indexOfColor,1)
    }else{
      colors_to_show.push(color)
    }
    console.log(colors_to_show)
  }

  ngOnInit(): void {
    if (window.screen.width <= 360) {
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

}
