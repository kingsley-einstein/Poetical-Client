import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { PoemDetailsServerConnectionService } from './poem-details-server-connection.service';

@Component({
  selector: 'app-poem-details-view',
  templateUrl: './poem-details-view.component.html',
  styleUrls: ['./poem-details-view.component.css']
})
export class PoemDetailsViewComponent implements OnInit {

  id: any; data: any; user: any; content: string = ''; page: number = 1; comments: any;

  constructor(private route: ActivatedRoute, private connector: PoemDetailsServerConnectionService) {
    route.params.subscribe(params => this.id = params.id);
    route.parent.params.subscribe(params => this.user = params.user_id);
   }

  ngOnInit() {
    this.getPoemData();
    this.getComments();
  }

  getPoemData() {
    this
    .connector
    .getPoemDetail(this.id)
    .subscribe((obj: any) => {
      console.log(obj)
      this.data = obj
    }, err => {
      console.log(err);
    }, () => {
      console.log('Completed');
    })
  }

  addComment() {
    this
    .connector
    .addCommentToPoem(this.user, this.id, this.content)
    .subscribe(obj => {
      console.log(obj);
    }, err => {
      console.log(err);
    }, () => {
      this.getPoemData();
      this.getComments();
      this.content = '';
    })
  }

  getComments() {
    this
    .connector
    .getPoemComments(this.id, (this.page - 1))
    .subscribe((obj: any) => {
      this.comments = obj;
      console.log(obj);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Completed');
    });
  }

}
