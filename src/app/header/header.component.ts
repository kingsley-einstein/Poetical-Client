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
    this.mainComponent.toggledOnSidebar = false;
  }

  toggleNavBar() {
    this.mainComponent.toggleNavBar(!this.mainComponent.toggledOn);
  }

  toggleSideBar() {
    this.mainComponent.toggleSideBar(!this.mainComponent.toggledOnSidebar);
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

}
