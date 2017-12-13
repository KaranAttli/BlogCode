import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Constants} from "../Constants";

@Injectable()

export class NewBlogService {

  constructor(private _http: Http){}

  addNewBlog(data: any): Observable<any> {
    data.author = localStorage.getItem('username');
    data.rating = Math.floor(Math.random()*10)+1;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(Constants.url.concat(Constants.getBlogs), data, options)
      .map(res=>res.json());

  }


}
