import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  @media screen and (max-width: 600px) {
    .right_login {
        display: none;
    }
}
  `]
})
export class LoginComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }

}
