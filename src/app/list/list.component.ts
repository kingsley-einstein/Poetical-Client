import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServerConnectionService } from './list-server-connection.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _userspage : number = 1; _allusersdata : any; isUserDataLoaded : boolean; _mainUserId : number; _mainUserName : string;
  _poemspage : number = 1; _allpoemsdata : any; isPoemDataLoaded : boolean; 

  constructor(private connector: ListServerConnectionService, private route: ActivatedRoute, public dashboard: DashboardComponent, private router: Router) {
    console.log('Initialised');
    this.route.parent.params.subscribe((param: any) => this._mainUserId = param.user_id);
    this.route.parent.params.subscribe((param: any) => this._mainUserName = param.user_name);
    //console.log(this._mainUserId);
   }

  ngOnInit() {
    this.listAllUsers();
    this.listAllPoems();
    //console.log(this.dashboard.getActualData());
  }

  listAllUsers() {
    this
    .connector
    .listAllUsers(this._userspage)
    .subscribe((data: any) => {
      console.log(data);
      this._allusersdata = data;
    }, 
  (err) => {
    console.log(err);
  }, () => {
    this.isUserDataLoaded = true;
  });
  }

  listAllPoems() {
    this
    .connector
    .listAllPoems(this._poemspage)
    .subscribe((data: any) => {
      console.log(data);
      this._allpoemsdata = data;
    }, 
  (err) => {
    console.log(err);
  }, () => {
    this.isPoemDataLoaded = true;
  });
  }

  likePoem(id: any) {
    this
    .connector
    .likePoem(id, this._mainUserId)
    .subscribe((data: any) => {
      console.log(data);
    }, err => {
      console.log(err);
    }, () => {
      this.listAllPoems();
    });
  }

}
