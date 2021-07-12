import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-now-play',
  templateUrl: './now-play.component.html',
  styleUrls: ['./now-play.component.css']
})
export class NowPlayComponent implements OnInit {
  data:any
  imgUrl=""
  constructor(private _user:ServicesService , private _router:Router) { }

  ngOnInit(): void {
    this.getNowPlayingMovie()
    this.handleConfig()
  }
  // this component display one page of now play movies come from api 
  getNowPlayingMovie(){
    this._user.getNowPlayingMovie().subscribe(
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
