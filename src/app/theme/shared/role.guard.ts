import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    )
    // : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      localStorage.setItem('userType','admin');
      let role=localStorage.getItem('userType');
      if(role=='admin'){
        return true;
      }

      return false;
  }
  
}
