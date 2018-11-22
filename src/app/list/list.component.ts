import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private connector: ListServerConnectionService, private route: ActivatedRoute, public dashboard: DashboardComponent) {
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

  addAsFriend(recepient: number) {
    this
    .connector
    .addUserItemAsFriend(this._mainUserId, recepient)
    .subscribe((obs : any) => {
      console.log(obs);
    },
  (err) => {
    console.log(err);
  }, () => {
    this.listAllUsers();
  })
  }

  isAlreadyRequested(item) : boolean {
    let isRequested = false;

if (item.receivedRequests.length > 0) {
  for (let j = 0; j < item.receivedRequests.length; j++) {
    if (item.receivedRequests[j].from === this._mainUserName) {
      isRequested = true;
    }
  }
}

    return isRequested;
  }

  isFriend(item) : boolean {
    let isFriend = false;

    if (item.users.length > 0) {
      for (let i = 0; i < item.users.length; i++) {
        if (item.users[i].username === this._mainUserName) {
          isFriend = true;
        }
      }
    }

    return isFriend;
  }

}
