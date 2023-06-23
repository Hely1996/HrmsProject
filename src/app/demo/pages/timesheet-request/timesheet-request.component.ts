import { HrmsService } from './../service/hrms.service';
import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-timesheet-request',
  templateUrl: './timesheet-request.component.html',
  styleUrls: ['./timesheet-request.component.scss']
})
export class TimesheetRequestComponent implements OnInit {
  myForm: any;

  options:any;
  people = [
    // { employeeName:'Anil Parmar',firstName: '15/04/2023', lastName: '1', companyProject :'Enprowess', email: 'The interview schedule for the java developer.' },
    // { employeeName:'Anil Parmar',firstName: '15/04/2023', lastName: '1', companyProject :'Enprowess', email: 'The interview schedule for the angular developer.' },
    // { employeeName:'Anil Parmar',firstName: '15/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Shortlisting the resumes of the candidates for the required position.' },
    // { employeeName:'Anil Parmar',firstName: '15/04/2023', lastName: '4', companyProject :'Enprowess', email: 'tested it.Bug is fixed.' },


    { employeeName:'Aayushi',firstName: '15/04/2023', lastName: '4', companyProject :'Enprowess',projectName:'EMS', email: 'The Crud for the employee.The bug fixing.' },
    { employeeName:'Aayushi',firstName: '15/04/2023', lastName: '4', companyProject :'Enprowess',projectName:'EMS', email: 'Created a form and created an api and tested it.Create table' },
    { employeeName:'Hely',firstName: '15/04/2023', lastName: '5',companyProject :'Enprowess',projectName:'AVMS', email: 'Created the api for insert then for did the frontend designing.Tested and bug is fixed.' },
    { employeeName:'Hely',firstName: '15/04/2023', lastName: '4', companyProject :'Enprowess',projectName:'AVMS', email: 'tested it.Bug is fixed.' },
    // { employeeName:'Aayushi',firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    // { employeeName:'Aayushi',firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    // { employeeName:'Aayushi',firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    // { employeeName:'Aayushi',firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    // { employeeName:'Aayushi',firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    // {employeeName:'Aayushi', firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    // { employeeName:'Aayushi',firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    // { employeeName:'Aayushi',firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    // { employeeName:'Aayushi',firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    // { employeeName:'Aayushi',firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    // {employeeName:'Aayushi', firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    
    
    // { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    // { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },

  ];
  constructor(private modalService: NgbModal,private hrmsService:HrmsService) { }

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  // constructor() { }

  ngOnInit(): void {
    
     this.options =[ 
       { value: 'option1', label: 'Enprowess' },
        { value: 'option2', label: 'Symform' },

        { value: 'option3', label: 'Ecosmob' }
    ];

    this.onSubmit();
  }
 // update the pagination based on the filtered data
 updatePagination() {
  this.collectionSize = this.people.length;
}
  // insertForm(credentials): Observable<any> {
  //   console.log(credentials);
  //   return this.http.post('http://192.168.1.3:8081/timesheet', credentials, httpOptions);
  
  // }

  onSubmit() {
    console.log(this.myForm.value);
    const formValue = this.myForm.value;
    
    this.hrmsService.insertForm(formValue).subscribe(
      data => {
       console.log(data);
       


        // router to navigate dashboard
        // this.router.navigate(['dashboard/analytics']).then(() => {
          // this.toastr.success('Lead generation job added successfully');
        // });
      },
      err => {
        console.error(err);
        // this.errorMessage = err;
        // console.log(this.errorMessage);
        // this.isLoginFailed = true;
      }
    );
  }

  
}
