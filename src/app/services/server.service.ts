import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class ServerService {
  constructor(private http: HttpClient) {}
  api(method, path, body?) {
    if (method === 'get') {
      return this.http.get(path);
    } else if (method === 'post') {
      const { title, author, date, image} = body;
      const postData = new FormData();
      postData.append('title', title);
      postData.append('author', author);
      postData.append('date', date);
      postData.append('image', image, title);
      return this.http.post(path, postData);
    }
  }
}
