import {Injectable} from "@angular/core";
import {Http , Headers , RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Constants} from "../Constants";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class LoginService {

  constructor(private  _http: Http) { }

  sendCredentials(data:any):Observable<any>{

    return this._http.get(Constants.url.concat(Constants.users)).map(res=>res.json());
  }

}
