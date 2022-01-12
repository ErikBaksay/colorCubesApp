import { products } from './../../products';
import { amounts_in_cart, items_in_cart } from './../../cart_data';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  FirstName = new FormControl('', [Validators.required]);
  LastName = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required, Validators.email]);
  PhoneNumber = new FormControl('', [Validators.required]);
  StreetAddress = new FormControl('', [Validators.required]);
  CityTown = new FormControl('', [Validators.required]);
  Postcode = new FormControl('', [Validators.required]);
  Country = new FormControl('', [Validators.required]);
  StateCounty = new FormControl('', [Validators.required]);

  paymentMethod = 'PayPal'
  cartTotalSum = 0
  items_in_cart = items_in_cart
  amounts_in_cart = amounts_in_cart
  products = products
  
  getErrorMessageMail() {
    if (this.Email.hasError('required')) {
      return 'Invalid email';
    }
  
    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessage() {
      return 'Invalid value';
  }

  changePaymentMethod(paymentMethod : string){
    this.paymentMethod = paymentMethod
  }

  cartTotal(){
    this.cartTotalSum = 0
    for (var item of amounts_in_cart){
      this.cartTotalSum += item*10
    }
    return this.cartTotalSum
  }

  constructor() { }

  ngOnInit(): void {

  }

}
