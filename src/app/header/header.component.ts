import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //public toggle : boolean = false;

  constructor(public mainComponent: MainComponent) { 
  }

  ngOnInit() {
    this.mainComponent.toggledOn = false;
  }

  toggleNavBar() {
    this.mainComponent.toggleNavBar(!this.mainComponent.toggledOn);
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

}
