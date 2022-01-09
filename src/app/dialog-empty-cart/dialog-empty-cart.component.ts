import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-empty-cart',
  templateUrl: './dialog-empty-cart.component.html',
  styleUrls: ['./dialog-empty-cart.component.css']
})
export class DialogEmptyCartComponent implements OnInit {

  constructor(private router : Router) { }

  goToPage(page:any){
    this.router.navigate([page])
  }

  ngOnInit(): void {
  }

}
