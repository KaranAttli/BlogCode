import {Injectable} from "@angular/core";
import {Http , Headers, RequestOptions} from "@angular/http";
import {Constants} from "../Constants";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SignupService {
  constructor(private _http: Http) { }


  sendData(userData: any) {

    userData.type = "user";
    console.log("user Data " + JSON.stringify(userData));
    const header = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers : header});
    return this._http.post(Constants.url.concat(Constants.users), userData, options).map(res=>res.json());
  }



}
