import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileServerConnectionService } from './profile-server-connection.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  _userId : number; _userName: string; _userProfile : any; _poemsPage : number = 1; _poemsData : any;

  constructor(private route: ActivatedRoute, private connector: ProfileServerConnectionService) {
        this.route.parent.params.subscribe((params) => this._userId = params.user_id);
        this.route.parent.params.subscribe((params) => this._userName = params.user_name);
   }

  ngOnInit() {
    this.getUser();
    this.getAllPoemsByUser();
  }

  getUser() {
    this
    .connector
    .getUser(this._userId)
    .subscribe((data: any) => {
      this._userProfile = data;
      console.log(data);
    }, (err) => {
      alert(`${err.message}`);
    });
  }

  getAllPoemsByUser() {
    this
    .connector
    .getAllPoemsByUser(this._userName, (this._poemsPage - 1))
    .subscribe((data: any) => {
      this._poemsData = data;
    },
  (err) => {
    alert(`${err.error}`);
  },
() => {
  console.log('Data loaded');
});
  }

}
