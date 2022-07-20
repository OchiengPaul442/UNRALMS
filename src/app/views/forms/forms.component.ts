import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles:[
    `
    .active{
      background-color: rgb(255 90 31 / var(--tw-bg-opacity));
      color:white;
    }
    `
  ]
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#TitleForms").show(); 
  }
  
  // hide instruction sections 
  hide(){
    $("#TitleForms").hide();
  }
}
