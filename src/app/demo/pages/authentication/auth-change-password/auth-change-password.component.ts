import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isChangedFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.changePassword(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isChangedFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isChangedFailed = true;
      }
    );
  }

}
