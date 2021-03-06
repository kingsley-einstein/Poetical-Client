import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageConnectionService } from './message-connection.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  page : number = 1;
  userId : any;
  data : any;

  page2 : number = 1;
  data2 : any;

  constructor(private route: ActivatedRoute, private connector: MessageConnectionService, private router: Router) { 
    this.route.parent.params.subscribe(params => this.userId = params.user_id);
    
  }

  ngOnInit() {
    this.getReceivedMessages();
    this.getSentMessages();
  }

  getReceivedMessages() {
    this
    .connector
    .getReceivedMessages(this.userId, (this.page - 1))
    .subscribe((value : any) => {
      console.log(value);
      this.data = value;
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('Completed');
    });
  }

  getSentMessages() {
    this
    .connector
    .getSentMessages(this.userId, (this.page2 -1))
    .subscribe((value: any) => {
      this.data2 = value;
    }, err  => {
      console.log(err);
    }, () => {
      console.log('Completed');
    });
  }

  deleteMessages(message: any) {
    this
    .connector
    .deleteMessage(message, this.userId, (this.page - 1))
    .subscribe(obj => {
      console.log(obj);
    }, err => {
      console.log(err);
    }, () => {
      this.getReceivedMessages();
      this.getSentMessages();
    });
  }

}
