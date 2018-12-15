import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageViewService } from './message-view-connection.service'

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {

  id: any;
  userName: any;
  page: any = 1;
  data: any;
  txtModel: string = '';

  constructor(private router: ActivatedRoute, private connector: MessageViewService) { 
    this.router.params.subscribe(params => this.id = params.id);
    this.router.parent.params.subscribe(params => this.userName = params.user_name);
  }

  ngOnInit() {
    this.getMessageDetail();
  }

  getMessageDetail() {
    this
    .connector
    .getMessageDetail(this.id, (this.page - 1))
    .subscribe((value: any) => {
      this.data = value;
      console.log(value);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('completed');
    });
  }

  sendMessage() {
    this
    .connector
    .sendText(this.userName, this.id, (this.page - 1), this.txtModel)
    .subscribe((value: any) => {
      this.data = value;
    }, (err) => {
      console.log(err);
    }, () => {
      this.txtModel = '';
    });
  }

}
