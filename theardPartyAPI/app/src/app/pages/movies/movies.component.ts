import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../../services/services.service'
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  token_user :any
  session_id :any
  data = { 'username': "" , "password": "" , "request_token":""  }
  reqToken = { "request_token" :""} 
  constructor( private _user:ServicesService, @Inject(DOCUMENT) private document: Document,
   private _router:Router
 ) { }

  ngOnInit(): void {
    this.generateSession()
  }
  
  generateSession(){
    this.token_user = localStorage.getItem('usertoken')
     this.reqToken.request_token = this.token_user
     console.log(this.reqToken)
     console.log(this.token_user)
     this._user.generateSession(this.reqToken).subscribe(
       res=>{
         console.log("ke")
         console.log(res)
         localStorage.setItem('session_id' , res.session_id)
         this._router.navigateByUrl("") 
       }
     )
}
  // login(){
  //   this.data.username = "ayasallam"
  //   this.data.password = "newlifewillcome"
  //   this.data.request_token = this.token_user
  //   console.log(this.reqToken)
  //   this._user.login(this.data).subscribe(
  //     res=>{
  //       console.log(res)
  //     }
  //   )
  // }

}
