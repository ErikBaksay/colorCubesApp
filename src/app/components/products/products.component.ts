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

  ngOnInit(): void {
  }

}
