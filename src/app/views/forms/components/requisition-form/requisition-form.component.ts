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
      // make sure that the names are the same as the end points on the API side to avoid Errors
      Attention_Of: ['',Validators.required],
      From_requester: ['',Validators.required],
      Test_date: ['',Validators.required],
      Sample_Ref_No: ['',Validators.required],
      Sample_Description: ['',Validators.required],
      Tests_Required: ['',Validators.required],
      Review_check_approve: ['',Validators.required],
      Program: ['',Validators.required],
      Start_Date: ['',Validators.required],
      Completion_Date: ['',Validators.required],
      Comments: ['',Validators.required],
      Requester_Sign: ['',Validators.required],
      Manager_sign: ['',Validators.required],
      LabMan_Sign_Date: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // posting requisition to the API
  getUserData(form:any) {
    this.API.saveUserData(form).subscribe((data:any) => {
      alert("Data Saved");
    } 
    );
  }

}
