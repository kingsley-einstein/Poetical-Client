import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileServerConnectionService } from './profile-server-connection.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  _userId : number; _userName: string; _userProfile : any; _poemsPage : number = 1; _poemsData : any;
  upload: File; uploadGroup: FormGroup; uploadControl: AbstractControl; uploadForm: FormData;

  constructor(private route: ActivatedRoute, private connector: ProfileServerConnectionService, private fb: FormBuilder) {
        this.route.parent.params.subscribe((params) => this._userId = params.user_id);
        this.route.parent.params.subscribe((params) => this._userName = params.user_name);
        this.uploadGroup = fb.group({
          uploadControl: ['', Validators.required]
        });

        this.uploadControl = this.uploadGroup.controls['uploadControl'];
   }

  ngOnInit() {
    this.getUser();
    this.getAllPoemsByUser();
  }

  getUser() {
    this
    .connector
    .getUser(this._userId)
    .subscribe((data: any) => {
      this._userProfile = data;
      console.log(data);
    }, (err) => {
      alert(`${err.message}`);
    });
  }

  getAllPoemsByUser() {
    this
    .connector
    .getAllPoemsByUser(this._userName, (this._poemsPage - 1))
    .subscribe((data: any) => {
      this._poemsData = data;
    },
  (err) => {
    alert(`${err.error}`);
  },
() => {
  console.log('Data loaded');
});
  }

  bindFiles(event: any) {
    this.upload = event.target.files[0];
    this.uploadForm = new FormData();
    this.uploadForm.append('picture', this.upload, 'picture');
  }

  uploadPicture(){
    this
    .connector
    .uploadPhoto(this.uploadForm, this._userId)
    .subscribe((value: any) => {
      alert(value);
    }, (err) => {
      alert(err.message);
    }, () => {
      this.getUser();
      this.uploadGroup.reset();
    });

  }

}
