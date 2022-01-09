import { items_in_cart, amounts_in_cart } from './../../cart_data';
import { colors_available, colors_to_show } from './../../colors_data';
import { products } from './../../products';
import { product } from "./../../product";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : product[] = products

  constructor() { }
  
  colorIsChecked(color:string){
    if (colors_to_show.length == 0){
      return true
    }else{
      return colors_to_show.includes(color)
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
    for(var product of products){
      if (!(colors_available.includes(product.color))){
        colors_available.push(product.color)
      }
    }
  }
}