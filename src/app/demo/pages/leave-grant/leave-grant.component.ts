import { HrmsService } from './../service/hrms.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface leaves{
  employeeId: number;
  startDate: string;
  endDate: number;

  leaveType:string;
  numberOfDays:number;
  fullDay:number;
  leaveStatus:string;
  description:string;
}
@Component({
  selector: 'app-leave-grant',
  templateUrl: './leave-grant.component.html',
  styleUrls: ['./leave-grant.component.scss']
})
export class LeaveGrantComponent implements OnInit {
  myForm: any;

  options:any;
  tableData: leaves[];
  filteredData : leaves[] =[];
 
  constructor(private formBuilder: FormBuilder,private modalService: NgbModal ,private hrmsService:HrmsService) { }

  page = 1;
  pageSize = 5;
  collectionSize = 0;
  currentPage = 1;
  ngOnInit(): void {
    this.getAllLeaves();
    this.myForm = this.formBuilder.group({
      employeeId: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      leaveType: new FormControl(),
      leaveStatus: new FormControl()
     });
    
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

  
  getAllLeaves(){
    this.hrmsService.getAllLeaves().subscribe(
      data => {
        console.log(data); 
         this.tableData=data;
         this.filteredData=this.tableData;
        console.log(this.filteredData);
      
      },
      err => {
        console.log(err);
      }
    );
  }
  onSubmit() {
    console.log(this.myForm.value);
    this.hrmsService.insertLeave(this.myForm.value).subscribe(
      data => {
        console.log(data); 
        this.tableData=data;
        this.filteredData=data;
      },
      err => {
        console.log(err);
      }
    );
   
  
  
  }
  searchQuery = '';


  searchQuery1='';

  // filterTableData(): void {
  //   console.log("test");
  //   this.filteredData = this.tableData.filter((item) => {
  //     console.log(item);
  //     if(item.employeeId == null && item.leaveStatus != null){
  //       const searchQuery='';
  //       const nameLowerCase = item.leaveStatus.toLowerCase();
  //       const searchQuery1 = nameLowerCase.includes(this.searchQuery1.toLowerCase());
  //       return searchQuery && searchQuery1;
  //     }else if(item.leaveStatus == null && item.employeeId != null){
  //       const searchQuery1='';
  //       const searchQuery = isNaN(Number(this.searchQuery)) || item.employeeId === Number(this.searchQuery);
  //       return searchQuery && searchQuery1;
  //     }else if(item.employeeId == null && item.leaveStatus == null){
  //       const searchQuery='';
  //       const searchQuery1='';
  //       return searchQuery && searchQuery1;
  //     }else if(item.employeeId != null && item.leaveStatus != null){
  //       const nameLowerCase = item.leaveStatus.toLowerCase();
  //       const searchQuery = isNaN(Number(this.searchQuery)) || item.employeeId === Number(this.searchQuery);
  //       const searchQuery1 = nameLowerCase.includes(this.searchQuery1.toLowerCase());
  //       return searchQuery && searchQuery1;
  //     }
  
     

  //     // const searchQueryLowerCase1 = this.searchQuery1.toLowerCase();
  //     // if (!isNaN(Number(searchQueryLowerCase1))) {
  //     //   return item.employeeId === Number(searchQueryLowerCase1);
  //     // }
  //   });
  //   this.currentPage = 1; // Reset to first page after filtering
  // }
  filterTableData(): void {
    this.filteredData = this.tableData.filter((item) => {
      const nameLowerCase = item.leaveStatus.toLowerCase();
      const searchQueryLowerCase = this.searchQuery.toLowerCase();
      return nameLowerCase.includes(searchQueryLowerCase);
    });
    this.currentPage = 1; // Reset to first page after filtering
  }

  getPaginatedData(): leaves[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredData.slice(startIndex, endIndex);
  }

}
