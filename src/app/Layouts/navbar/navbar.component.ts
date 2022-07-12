import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  OpenMenu() {
    $('#side_drop').show(300);
    $("#openNav").hide();
    $("#closeNav").show();
  }

  closeMenu() {
    $('#side_drop').hide(300);
    $("#closeNav").hide();
    $("#openNav").show();
  }

}
