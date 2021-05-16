import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor(private auth: AuthService) { }

  get isUserLoggedIn() {
    return this.auth.isLoggedIn;
  }

  get userId() {
    return this.auth.loggedInUserId;
  }

  userLogout() {
    return this.auth.logout();
  }

  ngOnInit(): void {
  }

}
