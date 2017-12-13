import {Injectable} from "@angular/core";
import {Http , Headers , RequestOptions} from "@angular/http";
import {Constants} from "../Constants";
import 'rxjs/add/operator/map';

@Injectable()


export class EditService{

  constructor(private _service: Http) { }

  getBlog(id){
    return this._service.get(Constants.url.concat(Constants.getBlogs)+'/'+id).map(res=>res.json());
  }

  sendData(data){
    data.rating = Math.floor(Math.random() * 10) + 1;

    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:header});
    return this._service.put(Constants.url.concat(Constants.getBlogs) + '/' + data.id, data , options).map(res=>res.json());

  }



}
