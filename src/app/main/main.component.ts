import { Component, OnInit } from '@angular/core';
//import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  toggledOn : boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar(toggledOn : boolean) {
    this.toggledOn = toggledOn;
  }

}
