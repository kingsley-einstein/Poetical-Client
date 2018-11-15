import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServerConnectionService } from './list-server-connection.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _userspage : number = 1; _allusersdata : any; isUserDataLoaded : boolean; _mainUserId : number; _mainUserName : string;
  _poemspage : number = 1; _allpoemsdata : any; isPoemDataLoaded : boolean; 

  constructor(private connector: ListServerConnectionService, private route: ActivatedRoute) {
    console.log('Initialised');
    this.route.parent.params.subscribe((param: any) => this._mainUserId = param.user_id);
    this.route.parent.params.subscribe((param: any) => this._mainUserName = param.user_name);
    //console.log(this._mainUserId);
   }

  ngOnInit() {
    this.listAllUsers();
    this.listAllPoems();
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

    for (let i = 0; i < item.receivedRequests.length; i++) {
      if (item.receivedRequests[i].from === this._mainUserName) {
        isRequested = true;
      }
    }

    return isRequested;
  }

}
