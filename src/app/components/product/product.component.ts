import { CartService } from './../../serviices/cart.service';
import { ApiService } from './../../serviices/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public productList:any;
  constructor(private apis:ApiService,private carts:CartService) { }

  ngOnInit() {
    this.apis.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addToCart(item:any){
    this.carts.addtoCart(item)
  }

}
