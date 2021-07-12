import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {
  data:any
  imgUrl=""
  constructor(private _user:ServicesService , private _router:Router) { }

  ngOnInit(): void {
    this.getUpComingMovie()
    this.handleConfig()
  }
  // this component display one page of now play movies come from api 
  getUpComingMovie(){
    this._user.getUpcomingMovie().subscribe(
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
