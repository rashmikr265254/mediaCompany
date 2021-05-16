import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userId: new FormControl(),
    password: new FormControl()
  })
  constructor(private auth: AuthService) { }


  ngOnInit(): void {
  }

  submitLogin() {
    this.auth.loginUser(this.loginForm.value.userId, this.loginForm.value.password);
  }

}
