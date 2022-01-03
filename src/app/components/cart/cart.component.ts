import { items_in_cart, amounts_in_cart } from './../../cart_data';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = products
  items_in_cart = items_in_cart
  amounts_in_cart = amounts_in_cart

  deleteProductFromCart(id:number){
    items_in_cart.splice(items_in_cart.indexOf(id),1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
