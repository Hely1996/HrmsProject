import { AuthService } from './../authentication/auth.service';
import { Router } from '@angular/router';
import { HrmsService } from './../service/hrms.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { TokenStorageService } from 'src/app/_helpers/token-storage.service';



interface people {
  employeId: number;
  workDoneOn: string;
  workTime: number;
  projectType:string;
  description:string;
}
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})


export class TimesheetComponent implements OnInit {
  myForm: any;
  
  errorMessage = '';
  roles: string[] = [];

  options:any;
  tabledata:people[];
 
  constructor(private formBuilder: FormBuilder,private modalService: NgbModal, 
    private hrmsService: AuthService, private datePipe: DatePipe, private router:Router, private tokenStorage: TokenStorageService) { }

  page = 1;
  pageSize = 5;
  collectionSize = 0;
  ngOnInit(){
    
    this.getTimesheetList();
    
    if (this.tokenStorage.getToken()) {
      // this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      // if(this.roles === 'admin'){

      // }
    }


    this.myForm = this.formBuilder.group({
      employeId: new FormControl(),
      projectType: new FormControl(),
      workDoneOn: new FormControl(),
      workTime: new FormControl(),
      description: new FormControl()
    
     });
    
  }
 
  filteredData: people[]=[];
  rowsPerPageOptions = [5, 10, 20];
  rowsPerPage = 5;
  currentPage = 1;
  searchQuery='';
  filterTableData(): void {
    this.filteredData = this.tabledata.filter((item) => {
      const nameLowerCase = item.description.toLowerCase();
      const searchQueryLowerCase = this.searchQuery.toLowerCase();
      return nameLowerCase.includes(searchQueryLowerCase);
    });
    this.currentPage = 1; // Reset to first page after filtering
  }

  getPaginatedData(): people[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredData.slice(startIndex, endIndex);
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
    
    this.modalService.open(content, { centered: true });
  }

 
  getTimesheetList() {
    
    this.hrmsService.getTimesheetList().subscribe(
      data => {
        console.log(data);  this.tabledata=data;
        this.filteredData=data;
      },
      err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
       
      }
    );
    
  }

  onSubmit() {
    this.hrmsService.insertForm(this.myForm.value).subscribe(
      data => {
        console.log(data);  
        this.tabledata=data;
        this.filteredData=data;      
      },
      err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
      }
    );
  }

}
