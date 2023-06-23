import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const apiUrl = environment.apiUrl;
const AUTH_API = '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'true' })
};
@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  constructor(private http: HttpClient) { }



  insertForm(form :FormData): Observable<any> {
    console.log("hey");
    console.log(form);
    console.log(apiUrl+'/timesheet/add/');
        return this.http.post(apiUrl+'/timesheet/add', form);
 
  }
  insertLeave(form :FormData): Observable<any> {
    console.log("hey");
    console.log(form);
        return this.http.post('http://192.168.1.11:8080/app/leave-request/createLeave', form);
 
  }
  getAllLeaves(): Observable<any> {
    console.log("heytest");    
    return this.http.get('http://192.168.1.11:8080/app/leave-request/getAllLeaves',httpOptions);
 
  }
  getAllEmployee():Observable<any>{
    return this.http.get('http://192.168.1.3:8082/employee',httpOptions);
  }
}
