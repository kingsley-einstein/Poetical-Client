import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuddyViewServerConnectionService } from './buddy-view-server-connection.service';

@Component({
  selector: 'app-buddy-view',
  templateUrl: './buddy-view.component.html',
  styleUrls: ['./buddy-view.component.css']
})
export class BuddyViewComponent implements OnInit {

  userId : number; _buddypage : number = 1; _requestsData : any;

  constructor(private connector: BuddyViewServerConnectionService, private route: ActivatedRoute) { 
    this.route.parent.params.subscribe((params) => this.userId = params.user_id);
  }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this
    .connector
    .getRequests((this._buddypage - 1), this.userId)
    .subscribe((data: any) => {
      this._requestsData = data;
      console.log(data);
    }, (err) => {
      alert(`${err.error}`);
    }, () => {
      console.log('Loaded data');
    });
  }

  acceptRequest(sender: number, request: number) {
    this
    .connector
    .acceptRequest(sender, this.userId, request)
    .subscribe((data) => {

    }, (err) => {
      alert(`${err.error}`);
    }, () => {
      console.log('Request accepted');
      this.getRequests();
    });
  }

  rejectRequest(request: number) {
    this
    .connector
    .rejectRequest(request)
    .subscribe((data) => {

    }, (err) => {
      alert(`${err.error}`);
    }, () => {
      console.log('Request rejected');
      this.getRequests();
    });
  }

}
