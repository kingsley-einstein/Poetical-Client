import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { FormBuilder, AbstractControl, Validators, FormGroup} from '@angular/forms';
import { MainComponent } from '../main/main.component';
import { DashboardServerConnectionService } from './dashboard-server-connection.service';
import { Logout } from '../Logout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _userId : number; _actualData : any;

  constructor(public mainComponent: MainComponent, private connector: DashboardServerConnectionService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe((param) => this._userId = param.user_id);
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this
    .connector
    .getUserDetails(this._userId)
    .subscribe((data : any) => {
      this._actualData = data;
      //localStorage.setItem('userFriends', JSON.stringify(data.users));
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('user_id', data.id);
      localStorage.setItem('user_name', data.username);
    },
  (err) => {
    console.log(err);
  });
  }

  logUserOut() {
    this
    .connector
    .logUserOut(this._userId)
    .subscribe((obj: any) => {
      console.log(obj)
    }, (err) => {
      console.log(err);
    }, () => {
      Logout.logout(this.router);
    })
  }

}
