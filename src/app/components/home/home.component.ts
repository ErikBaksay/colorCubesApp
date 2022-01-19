import { amounts_in_cart } from './../../cart_data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { products } from './../../products';
import { product } from "./../../product";
import { items_in_cart } from 'src/app/cart_data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : product[] = products

  constructor(public router: Router) { }

  goToPage(page:any){
    this.router.navigate([page])
  }

  mostPopular(){
    if (window.screen.width <= 480) {
      return [1,9,12,8]
    }else{
      return [1,9,12]
    }
  }

  addProductToCart(id:number){
    if (items_in_cart.includes(id)){
      let indexOfItem = items_in_cart.indexOf(id)
      amounts_in_cart[indexOfItem] ++
      
    }else{
      items_in_cart.push(id)
      amounts_in_cart.push(1)
    }
  }

  ngOnInit(): void {
  }

}
