import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from 'src/app/Services/api.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-requisition-form',
  templateUrl: './requisition-form.component.html'
})
export class RequisitionFormComponent implements OnInit {
  form: FormGroup;

  // add button in form
  AddInput() {
    $("#newInputForm").append('<input type="text" id="testrequired" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required="">');
  }

  constructor(public fb: FormBuilder, private API: APIService) { 
    this.form = this.fb.group({
      // id: 0, 
      attentionOf: ['',Validators.required],
      from: ['',Validators.required],
      date_: ['',Validators.required],
      RefNo: ['',Validators.required],
      Description: ['',Validators.required],
      testrequired: ['',Validators.required],
      Review: ['',Validators.required],
      Program: ['',Validators.required],
      startdate: ['',Validators.required],
      enddate: ['',Validators.required],
      Comments: ['',Validators.required],
      requester: ['',Validators.required],
      labmanagersign: ['',Validators.required],
      signeddate: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // posting requisition to the API
  getUserData(form:any) {
    console.log(form);
    this.API.saveUserData(form).subscribe((data:any) => {
      alert("Data Saved");
    } 
    );
  }

}
