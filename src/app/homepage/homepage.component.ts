import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['dashboard', localStorage.getItem('user_id'), localStorage.getItem('user_name')]);
    }
   }

  ngOnInit() {
  }

}
