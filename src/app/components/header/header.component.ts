import { CartService } from './../../serviices/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalItem:number;
  constructor(private cars:CartService) { }

  ngOnInit() {
    this.cars.getProdut().subscribe(res=>{
      this.totalItem=res.length
    })
  }

}
