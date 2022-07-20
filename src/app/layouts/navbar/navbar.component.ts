import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      @media (max-width: 1278px) {
        .menu_btn_open{
          display: block;
        }
      }
    `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // toggle dropdown menu
  openDropdwon() {
    $('#dropdownMenu').toggle(300);
  }

  // toggle menu list
  showMenu() {
    $(".menu_list_mobile").addClass("flex");
    $(".menu_list_mobile").show(300);
    $(".menu_btn_open").hide();
    $(".menu_btn_close").show();
  }

  closeMenu(){
    $(".menu_list_mobile").hide(300);
    $(".menu_list_mobile").removeClass("flex");
    $(".menu_btn_open").show();
    $(".menu_btn_close").hide();
  }

}
