import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  data:any
  imgUrl=""
  constructor(private _user:ServicesService , private _router:Router) { }

  ngOnInit(): void {
    this.getTopRatedMovie()
    this.handleConfig()
  }
  // this component display one page of top rated movies come from api 
  async getTopRatedMovie(){
    this._user.getTopRatedMovie().subscribe(
      res =>{
        //console.log(res.results)
        this.data=res.results
      }
  )}
  handleConfig(){
    this._user.conf().subscribe(
      res=>{
        this.imgUrl+= (res.images.base_url + res.images.poster_sizes[3])
      }
    )
  }
}
