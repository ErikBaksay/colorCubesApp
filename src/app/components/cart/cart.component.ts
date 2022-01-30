import { DialogEmptyCartComponent } from './../../dialog-empty-cart/dialog-empty-cart.component';
import { items_in_cart, amounts_in_cart } from 'src/app/cart_data';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = products
  items_in_cart = items_in_cart
  amounts_in_cart = amounts_in_cart
  newValue = 0

  mobile : boolean =false;

  constructor( private router: Router, public dialog : MatDialog ) { }

  deleteProductFromCart(id:number){
    console.log(items_in_cart)
    console.log(amounts_in_cart)
    let item_in_cart = items_in_cart.indexOf(id)
    items_in_cart.splice(item_in_cart,1)
    amounts_in_cart.splice(item_in_cart,1)
    console.log(items_in_cart)
    console.log(amounts_in_cart)
  }

  goToCheckout(){
    this.router.navigate(['checkout'])
    if (items_in_cart.length==0){
      this.dialog.open(DialogEmptyCartComponent);
    }
  }

  changedAmount(id:number,higherOrLower : string){
    if (amounts_in_cart[id] >= 1){
      if (higherOrLower == '+'){
        amounts_in_cart[id] = amounts_in_cart[id] + 1
      }
      else{
        amounts_in_cart[id] = amounts_in_cart[id] - 1
      }
    }
    if (amounts_in_cart[id] == 0){
      amounts_in_cart.splice(id,1)
      items_in_cart.splice(id,1)
    }    
  }

  ngOnInit(): void {
    if (window.screen.width <= 480) {
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }
}
