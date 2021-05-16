import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_DB = [{userid : 'abc@media.com',password:'abc123','username':'tom'}, 
                              {userid : 'def@media.com',password:'def123','username':'dick'}];
  private loggedInUser = '';

  constructor(private router: Router) {
   }

  get isLoggedIn(): boolean {
    return this.loggedInUser !== '';
  }

  get loggedInUserId(): string | undefined {
    
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = '';
    this.router.navigate(['home']);
  }
  
  loginUser(userName: string, password: string): boolean {
    const user = this.USER_DB.find(item => item.userid === userName && item.password === password);
    if (user) {
      this.loggedInUser = user.username;
      this.router.navigate(['gallery']);
      return true;
    }
    return false;
  }
}
