import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/api.service';


@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html'
})
export class ListViewsComponent implements OnInit {
  requisitions: any;

  constructor(private API: APIService) {
    this.getRequisitions();
   }

  ngOnInit(): void {
  }

  // gets all requisitions from the API
  getRequisitions() {
    this.API.getAllRequisitions().subscribe(data => {
      this.requisitions = data;
    });
  }


}
