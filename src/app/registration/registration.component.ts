import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RegistrationServerConnectionService } from './registration-server-connection.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  email: AbstractControl;
  gender: string;
  genders: string[] = ['Male', 'Female'];

  constructor(private builder: FormBuilder, private connector: RegistrationServerConnectionService) { 
    this.registerGroup = builder
                         .group({
                           username: ['', Validators.required],
                           password: ['', Validators
                                          .compose([Validators.required, Validators.minLength(8)])],
                           email: ['', Validators
                                        .compose([Validators.required, Validators.email])]
                         });
    this.username = this.registerGroup.controls['username'];
    this.password = this.registerGroup.controls['password'];
    this.email = this.registerGroup.controls['email'];
    //console.log(this.registerGroup.value.username);
  }

  ngOnInit() {
  }

  register() {
    this
    .connector
    .post(this.registerGroup, this.gender)
    .subscribe((data) => {
      console.log(data);
    },
  (err) => {
    console.log(err);
  },
() => {

})
  }

  bindToElement(event: any) {
    this.gender = event.target.value;
  }

}
