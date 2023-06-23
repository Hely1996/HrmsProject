import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { TokenStorageService } from './../../../../_helpers/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      // if(this.roles === 'admin'){

      // }
    }

  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        localStorage.setItem('token','token');
        localStorage.setItem('userType','employee');
        // localStorage.setItem('userType','admin');
        // alert(localStorage.getItem('token'));

        // router to navigate dashboard
        this.router.navigate(['dashboard/analytics']).then(() => {
          // this.toastr.success('Lead generation job added successfully');
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
