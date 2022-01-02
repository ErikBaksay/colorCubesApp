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
    return colors_to_show.includes(color)
  }
  ngOnInit(): void {

    for(var product of products){
      if (!(colors_available.includes(product.color))){
        colors_available.push(product.color)
      }
      if (!(colors_to_show.includes(product.color))){
        colors_to_show.push(product.color)
      }
    }
  }
}