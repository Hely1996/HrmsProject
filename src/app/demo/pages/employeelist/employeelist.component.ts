import { HrmsService } from './../service/hrms.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

    myForm: any;

    options:any;
    people = [
      { empname:'Hely Rathod',role:'Employee',firstName: '01/04/2021', lastName: '50000', companyProject :'Enprowess',project:'AVMS', email: 'The Crud for the employee.The bug fixing.',status:'Working' },
      { empname:'Anil Parmar',role:'HR',firstName: '01/10/2021', lastName: '35000', companyProject :'Enprowess',project:'' ,email: 'Created a form and created an api and tested it.Create table' ,status:'Working'},
      { empname:'Aayushi',role:'Employee',firstName: '01/02/2022', lastName: '18000',companyProject :'Enprowess',project:'HRMS', email: 'Created the api.Tested and bug is fixed.',status:'Working' },
      { empname:'Aayesha',role:'Employee',firstName: '01/01/2023', lastName: '18000', companyProject :'Enprowess',project:'EMS', email: 'Created a form and created an api and tested it.Create table' ,status:'Working'},
      { empname:'Nishi',role:'Employee',firstName: '01/01/2023', lastName: '18000', companyProject :'Enprowess',project:'EMS', email: 'Created a form and created an api and tested it.Create table' ,status:'Working'},
      
      { empname:'Priti',role:'Employee',firstName: '01/07/2022', lastName: '18000', companyProject :'Enprowess',project:'EMS', email: 'The Crud for the employee.The bug fixing.',status:'Working' },
     { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
      { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
      { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
      { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
      { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
      { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
  
    ];
    constructor(private formBuilder: FormBuilder,private modalService: NgbModal,private hrmsservice:HrmsService) { }
  
    page = 1;
    pageSize = 5;
    collectionSize = 0;
    values=['HR','Employee'];
    ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        fromDate: new FormControl(),
        hour: new FormControl(),
       reason: new FormControl(),
       isChecked: new FormControl()
       });

       this.getAllEmployeeList();

       this.options =[ 
         { value: 'option1', label: 'Enprowess' },
          { value: 'option2', label: 'Symform' },
  
          { value: 'option3', label: 'Ecosmob' }
      ];
  
  
      
    }
    getStatusClass(status: string): string {
      if (status === 'accepted') {
        return 'text-success';
      } else if (status === 'pending') {
        return 'text-warning';
      } else {
        return 'text-muted';
      }
    }
    open(content) {
      // alert('hey');
      this.modalService.open(content, { centered: true });
    }
    openedit(contentedit) {
      // alert('hey');
      this.modalService.open(contentedit, { centered: true });
    }
    // update the pagination based on the filtered data
    updatePagination() {
      this.collectionSize = this.people.length;
    }
    onSubmit() {
      console.log(this.myForm.value);
    }
    getAllEmployeeList(){
      this.hrmsservice.getAllEmployee().subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      });
    }
  
  }
  
 
