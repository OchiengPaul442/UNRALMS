import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
    `
      .active_main {
        background-color: rgb(243 244 246 / var(--tw-bg-opacity));
      }
      
      @media screen and (max-width:1278px) {
      .menu_list{
          display: none;
      }
    }
    `
  ]
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    $("#TitleForms").show();
  }

}
