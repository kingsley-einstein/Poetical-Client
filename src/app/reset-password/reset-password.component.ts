import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResetPasswordServerConnectionService } from './reset-password-server-connection.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetGroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  confpassword: AbstractControl;
  data: any;
  loading: boolean = false;

  constructor(private builder: FormBuilder, private connector: ResetPasswordServerConnectionService) { 
    this.resetGroup = builder
                      .group({
                        email: ['', Validators.compose([
                          Validators.required, Validators.email
                        ])],
                        password: ['', Validators.compose([
                          Validators.required, Validators.minLength(8)
                        ])],
                        confpassword: ['', Validators.compose([
                          Validators.required, Validators.minLength(8)
                        ])]
                      });
    this.email = this.resetGroup.controls['email'];
    this.password = this.resetGroup.controls['password'];
    this.confpassword = this.resetGroup.controls['confpassword'];
  }

  ngOnInit() {
  }

  passwordsMatch() : boolean {
    return this.confpassword.value == this.password.value;
  }

  reset() {
    this.loading = true;
    this
    .connector
    .reset(this.resetGroup)
    .subscribe(data => {
      this.data = data;
      this.loading = true;
    }, 
    (err) => {
      this.data = err.message;
      this.loading = false;
    },
  () => {
    alert(this.data);
    this.loading = false;
    this.resetGroup.reset();
  })
  }


}
