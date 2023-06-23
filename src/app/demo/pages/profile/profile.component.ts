import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
// import { NgbCard } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(private modalService: NgbModal, private http: HttpClient ) { }

  name = 'Hely Rathod';
  profileImage = 'https://via.placeholder.com/150';
  bio = 'The software developer having more than 2.5 years of experience.Technologies known:Angular,Html,Css,Spring boot,php';
  email = 'hely@zoho.com';
  socialLinks = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com' },
    { icon: 'fa-twitter', url: 'https://www.twitter.com' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com' }
  ];
  mob=9723232325;
  ngOnInit(): void {
    // this.http.get('/src/app/assets/images/bg-1.jpg').subscribe((data) => {
    //   console.log(data);
    // });
  }
  open(content) {
    // alert('hey');
    this.modalService.open(content, { centered: true });
  }
}
