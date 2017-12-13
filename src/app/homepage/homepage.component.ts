import { Component, OnInit } from '@angular/core';
import {Constants} from "../Constants";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("user is " + localStorage.getItem('username') + " " + localStorage.getItem('type'));

  }

}
