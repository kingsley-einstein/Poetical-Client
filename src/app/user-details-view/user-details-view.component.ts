import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsViewServerConnectionService } from './user-details-view-server-connection.service';

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css']
})
export class UserDetailsViewComponent implements OnInit {

  _name: string; _id: number; userData: any; _poemsPage: number = 1;
  _poemsData: any;

  constructor(private route: ActivatedRoute, private connector: UserDetailsViewServerConnectionService) {
    route.params.subscribe(params => {
      this._id = params.id;
      this._name = params.name;
    });
   }

  ngOnInit() {
    this.getUserDetail();
    this.getAllPoemsByUser();
  }

  getUserDetail() {
    this
    .connector
    .getUserDetails(this._id)
    .subscribe((obj: any) => {
      this.userData = obj;
      console.log(obj);
    }, err => {
      console.log(err);
    });
  }

  getAllPoemsByUser() {
    this
    .connector
    .getPoemsByUser(this._name, (this._poemsPage - 1))
    .subscribe((obj: any) => {
      this._poemsData = obj
    }, err => {
      console.log(err);
    });
  }

}
