import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isGenerateFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.generatePassword(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isGenerateFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isGenerateFailed = true;
      }
    );
  }
}
