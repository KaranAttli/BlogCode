import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Constants} from "../Constants";


@Injectable()
export class BloglistService {

  constructor(private _http: Http ) { }

  getBlogs(){

    return this._http.get(Constants.url.concat(Constants.getBlogs)).map(res=>res.json());
  }


  deleteBlog(id){
    console.log("id is " + id);
    const header = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers:header});
    return this._http.delete(Constants.url.concat(Constants.getBlogs).concat('/'+ id)).map(res=>res.json());
  }



}



