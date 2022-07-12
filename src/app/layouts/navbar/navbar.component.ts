import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // toggle dropdown menu
  openDropdwon(){
    $('#dropdownMenu').toggle(300);
  }

}
