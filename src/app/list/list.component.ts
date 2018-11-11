import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServerConnectionService } from './list-server-connection.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _userspage : number = 1; _allusersdata : any; isUserDataLoaded : boolean; _mainUserId : number;

  constructor(private connector: ListServerConnectionService, private route: ActivatedRoute) {
    console.log('Initialised');
    this.route.parent.params.subscribe((param: any) => this._mainUserId = param.user_id);
    //console.log(this._mainUserId);
   }

  ngOnInit() {
    this.listAllUsers();
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
  })
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
  })
  }

}
