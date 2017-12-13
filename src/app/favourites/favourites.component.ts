import { Component, OnInit } from '@angular/core';
import {BloglistService} from "../bloglist/bloglist.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  providers: [BloglistService]
})
export class FavouritesComponent implements OnInit {

  constructor(private _service: BloglistService) { }
  data: any =[] ;
  ngOnInit() {
    let that = this;
    this._service.getBlogs().subscribe(x=>{
      x.forEach(function (item) {
        if(item.rating>7){
          that.data.push(item);
        }
      });
      }

    );

  }

}
