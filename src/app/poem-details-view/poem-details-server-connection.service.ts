import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoemDetailsServerConnectionService {

  constructor(private connector: HttpClient) { }

  getPoemDetail(id: any) {
    return this.connector
               .get(`${environment._api}/poems/find/${id}?access_token=${localStorage.getItem('token')}`)
  }

  addCommentToPoem(author: any, poem: any, content: any) {
    return this.connector
               .post(`${environment._api}/comments/add_comment_to_poem?author_id=${author}&poem_id=${poem}&access_token=${localStorage.getItem('token')}`, {content: content});
  }

  getPoemComments(id: any, page: any) {
    return this.connector
               .get(`${environment._api}/comments/poem_comments/${id}/${page}?access_token=${localStorage.getItem('token')}`);
  }
}
