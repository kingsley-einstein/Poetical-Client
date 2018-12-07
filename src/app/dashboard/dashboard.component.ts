import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, AbstractControl, Validators, FormGroup} from '@angular/forms';
import { MainComponent } from '../main/main.component';
import { DashboardServerConnectionService } from './dashboard-server-connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _userId : number; _actualData : any;
  uploadGroup: FormGroup;
  picture: AbstractControl;
  fileData: File;
  fileList: FileList;

  constructor(public mainComponent: MainComponent, private connector: DashboardServerConnectionService, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.route.params.subscribe((param) => this._userId = param.user_id);
    this.uploadGroup = this.fb.group({
      picture: ['', Validators.required]
    });
    this.picture = this.uploadGroup.controls['picture'];
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this
    .connector
    .getUserDetails(this._userId)
    .subscribe((data : any) => {
      this._actualData = data;
      //localStorage.setItem('userFriends', JSON.stringify(data.users));
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('user_id', data.id);
      localStorage.setItem('user_name', data.username);
    },
  (err) => {
    console.log(err);
  });
  }

  public getActualData() {
    return this._actualData;
  }

  bindFiles(event: any) {
    this.fileList = event.target.files;
  }

  uploadPicture(id: number) {

    this.fileData = this.fileList.item(0);
    let form = new FormData();

    form.append('picture', this.fileData, this.fileData.name);

    this
    .connector
    .uploadPicture(id, form)
    .subscribe((data: string) => {
      console.log(data);
      alert(data);
    }, 
  (err) => {
    console.log(err);
    alert(`${err.status} | ${err.error}`);
  }, () => {
    this.getUserDetails();
  })
  }



}
