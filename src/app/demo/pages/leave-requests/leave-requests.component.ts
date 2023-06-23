import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent implements OnInit {
  page = 1;
  pageSize = 5;
  myForm: any;


  leaverequest = [    
    // { employeeName: 'Anil Parmar', fromDate: '04/04/2023', toDate :'05/04/2023',full_day:'Yes', description: 'I am going out of the city for some personal work.so kindly approve my request.' },
   

    // { employeeName: 'Anil', fromDate: '04/04/2023', toDate :'05/04/2023',full_day:'Yes', description: 'I am going out of the city for some personal work.so kindly approve my request.' },
    { employeeName: 'Anil Parmar', fromDate: '15/04/2023', toDate :'21/04/2023',full_day:'Yes', description: 'I am going out of the city for a vacation.So kindly approve leave request.' },
    // { employeeName: 'Priti', fromDate: '15/04/2023', toDate :'15/04/2023',full_day:'Yes', description: 'I have to go to the college for the presentationso kindly approve my request.' },
    // { employeeName: 'Nishi', fromDate: '15/04/2023', toDate :'15/04/2023',full_day:'Yes', description: 'I have to go to the college for the presentationso kindly approve my request.' },
    // { employeeName: 'Aayushi', fromDate: '04/04/2023', toDate :'05/04/2023',full_day:'Yes', description: 'I am going out of the city for some personal work.so kindly approve my request.' }
  ];


  constructor(private formBuilder: FormBuilder,private modalService: NgbModal, private router: Router) { }
  

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      fromDate: new FormControl(),
      hour: new FormControl(),
     reason: new FormControl(),
     isChecked: new FormControl()
     });
  }
  open(content) {
    // alert('hey');
    this.modalService.open(content, { centered: true });
  }
  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/leave-grant'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
 
}
