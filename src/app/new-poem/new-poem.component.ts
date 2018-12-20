import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewPoemServerConnectionService } from './new-poem-server-connection.service';

@Component({
  selector: 'app-new-poem',
  templateUrl: './new-poem.component.html',
  styleUrls: ['./new-poem.component.css']
})
export class NewPoemComponent implements OnInit {

  userName: any;
  poemGroup: FormGroup;
  poemTitle: AbstractControl;
  poemContent: AbstractControl;
  errors: string[] = ['Title too short', 'Title too long', 'Content too short', 'Content too long']

  constructor(private route: ActivatedRoute, private connector: NewPoemServerConnectionService, private fb: FormBuilder) { 
    route.parent.params.subscribe(params => this.userName = params.user_name);
    this.poemGroup = fb.group({
      title: ['', Validators.compose(
        [Validators.required, Validators.maxLength(80), Validators.minLength(5)]
      )],
      content: ['', Validators.compose(
        [Validators.required, Validators.maxLength(6000), Validators.minLength(80)]
      )]
    });

    this.poemTitle = this.poemGroup.controls['title'];
    this.poemContent = this.poemGroup.controls['content'];
  }

  ngOnInit() {
  }

  createPoem() {
    this
    .connector
    .createPoem(this.poemGroup, this.userName)
    .subscribe((value: any) => {
      console.log(value);
    }, (err) => {
      console.log(err);
    }, () => {
      alert('Successfully created poem');
      this.poemGroup.reset();
    })
  }

}
