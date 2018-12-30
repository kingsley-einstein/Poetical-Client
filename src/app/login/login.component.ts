import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { LoginServerConnectionService } from './login-server-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  data: any;
  buttonText: string = 'Login'

  constructor(private builder: FormBuilder, private connection: LoginServerConnectionService, private router: Router) { 
    this.loginGroup = builder
                      .group(
                        {
                          username: ['', Validators.required],
                          password: ['', Validators.required]
                        }
                      );
    this.username = this.loginGroup.controls['username'];
    this.password = this.loginGroup.controls['password'];
  }

  ngOnInit() {
  }

  login() {
    
    this.buttonText = 'Loading...';

    this
    .connection
    .retrieveToken(this.loginGroup)
    .subscribe((data : any) => {
      localStorage.setItem('token', data.access_token);
      console.log(data);
    }, 
  (err) => {
    console.log(err);
  },
() => {
  this
  .connection
  .login(this.loginGroup)
  .subscribe((data: any) => {
    console.log(data);
    this.data = data;
   localStorage.setItem('user_name', data.username);
   localStorage.setItem('user_id', data.id)
   localStorage.setItem('user', JSON.stringify(data));
   //localStorage.setItem('userFriends', JSON.stringify(data.users))
  },
(err) => {
  console.log(err);
  alert(`${err.error}`);
  this.buttonText = 'Login'
}, 
() => {

  this.buttonText = 'Login Successful';
  this.router.navigate(['dashboard', this.data.id, this.data.username]);

})
})
  }

}
