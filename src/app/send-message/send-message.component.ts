import { Component, OnInit } from '@angular/core';
import { SendMessageService } from './send-message-connection.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  username: AbstractControl;
  text: AbstractControl;
  msgGroup: FormGroup;
  author_username: any;

  constructor(private connector: SendMessageService, private fb: FormBuilder, private router: ActivatedRoute) { 
    this.router.parent.params.subscribe(params => this.author_username = params.user_name);
    this.msgGroup = fb.group({
        username: ['', Validators.required],
        text: ['', Validators.required]
    });

    this.username = this.msgGroup.controls['username'];
    this.text = this.msgGroup.controls['text'];
  }

  ngOnInit() {
  }

  sendMessage() {
    this
    .connector
    .sendMessage(this.author_username, this.username.value, this.msgGroup)
    .subscribe((value: any) => {
      console.log(value);
    }, (err) => {
      console.log(err);
    }, () => {
      alert('Message sent');
      this.msgGroup.reset();
    });
  }

}
