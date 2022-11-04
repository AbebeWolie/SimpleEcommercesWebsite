import { Component, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupform:NgForm
  name:string;
  post:{name:string,email:string};

  onSubmit(){
    console.log(this.signupform.valid)
  }
}


