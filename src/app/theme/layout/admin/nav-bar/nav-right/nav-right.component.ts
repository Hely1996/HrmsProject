import { TokenStorageService } from './../../../../../_helpers/token-storage.service';
import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() { }

  // logout user with destroying jwt token
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
