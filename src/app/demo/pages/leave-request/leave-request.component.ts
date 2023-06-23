import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  myForm: FormGroup;
  // isChecked = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
  //   this.myForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),
  //   fromDate: new FormControl(),
  //   toDate: new FormControl()
  // });

this.myForm = this.formBuilder.group({
     fromDate: new FormControl(),
    toDate: new FormControl(),
    reason: new FormControl(),
    isChecked: new FormControl()
    });
   
  }


  onSubmit() {
    // alert(this.myForm.value.name);
    console.log(this.myForm.value);
  }

}
