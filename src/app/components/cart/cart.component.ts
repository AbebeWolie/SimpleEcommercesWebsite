import { CartService } from './../../serviices/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public productList:any=[];
 public grandTotal:number = 0;
  constructor( private cars:CartService) { }

  ngOnInit(): void {
    this.cars.getProdut().subscribe(res=>{
      this.productList = res;
      this.grandTotal=this.cars.getTotalPrice()
    })
  }

  removeI(item:any){
    this.cars.removeCartItem(item)
  }

 emptyCart(){
  this.cars.removeAllCart();
 }

}
