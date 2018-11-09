import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { LoginServerConnectionService } from './login-server-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  buttonText: string = 'Login'

  constructor(private builder: FormBuilder, private connection: LoginServerConnectionService) { 
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
   localStorage.setItem('user', JSON.stringify(data));
  },
(err) => {
  console.log(err);
  this.buttonText = 'Login'
}, 
() => {

  this.buttonText = 'Login Successful';

})
})
  }

}
