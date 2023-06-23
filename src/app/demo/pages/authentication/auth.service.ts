import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'true' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  insertForm(myForm):Observable<any> {
    console.log(myForm);
    // console.log()
    // const plainFormData = { ...myForm };
    return this.http.post('http://192.168.1.3:8081/timesheet',myForm,httpOptions);
    // return this.http.get('http://192.168.1.3:8081/timesheet');
  }
  getTimesheetList():Observable<any> {
    // console.log(myForm);
    // console.log()
    // const plainFormData = { ...myForm };
    return this.http.get('http://192.168.1.3:8081/timesheet',httpOptions);
    // return this.http.get('http://192.168.1.3:8081/timesheet');
  }

  // insertForm(form): Observable<any> {
  //   console.log("hey");
  //   console.log(form);
  //   // console.log(apiUrl+'/timesheet/add/');
  //       return this.http.post('http://192.168.1.3:8081/timesheet/add', form, httpOptions);
 
  // }
  generatePassword(form): Observable<any> {
    return this.http.put(AUTH_API + 'forgot-password/' + form.email, httpOptions);
  }

  changePassword(form): Observable<any> {
    return this.http.put(AUTH_API + 'reset-password', {
      email: form.email,
      newPassword: form.newpassword,
      oldPassword: form.oldpassword
    }, httpOptions);
  }
}
