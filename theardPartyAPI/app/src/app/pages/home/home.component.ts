import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../../services/services.service'
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';




 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any
  fav= {"media_id": 0}
  session_id :any
  list_id :any
  courses: Observable<any[]> | undefined;
  count = 1
  messages :any
  message = ""
  messagedata :string [] = []
  chatdata={ message : this.messagedata}
  constructor( private _user:ServicesService, private _router:Router,
    @Inject(DOCUMENT) private document: Document, private firestore:AngularFirestore) {
    } 

  ngOnInit(): void {
    this.showchat()
  }
  async addmessage(){
    console.log(this.count)
    this.chatdata.message.push(this.message)
    // this.firestore.collection('mychats').doc('one').collection('messages').doc('1').set(this.chatdata)
    var all = this.firestore.collection('mychats')
    await  Promise.all([all.doc("one").collection('messages').doc(`${this.count}`).set(this.chatdata , {merge : true})]) 
    this.showchat()
  }
  showchat(){
    var one = "one"
    var s=  this.firestore.collection(`mychats`).doc(`${one}`).collection('messages').doc('1').get()
     .subscribe(
      res=>{
        console.log(res.data())
        let data = res.data()
        if(data != undefined){
          this.messages=data.message
          data.message.forEach((element: any) => {
            console.log(element)
          });
        }
      }
    )

      
      
  }
  // i try to generate a list to add fav movie but it sometime work and sometime not work
  //i know how hadle next step when it work 
  // it easy to add and remove fav movie 
  createList(){
    this.data = {
      "name": "This is my awesome test list.",
      "description": "Just an awesome list dawg.",
      "language": "en"
    }
    console.log(this.data)
    this.session_id = localStorage.getItem('session_id')
    console.log(this.session_id)
    this._user.createList(this.data , this.session_id ).subscribe(
      res=>{
        console.log(res.list_id)
        this.list_id = res.list_id
      }
    )
  }
  //when i get list of fav movie i can handle remove it also
  getList(){
    console.log(this.list_id)
    this._user.getList( this.list_id ).subscribe(
      res=>{
        console.log(res)
      }
    )
  }
  // this add fav movie to a spesifc list uer made
  addFavMovie(fav_id:any){
    this.fav.media_id = fav_id
    this.session_id = localStorage.getItem('session_id')
    console.log(this.fav)
    const account_id = localStorage.getItem('account_id')
    console.log(this.list_id , this.session_id)
    this._user.addFavMovie(this.fav , this.list_id , this.session_id).subscribe(
      res=>{
        console.log("hello")
        console.log(res)
      }
    )
  }
  // this add fav movie to array and add it to user account but there is no option to delete it so i had 
  // create list first
  addFav(fav_id:any){
    console.log(fav_id)
    this.fav.media_id = fav_id
    this.session_id = localStorage.getItem('session_id')
    console.log(this.fav)
    const account_id = localStorage.getItem('account_id')
    this._user.addToFav(this.fav ,account_id, this.session_id).subscribe(
      res=>{
        console.log(res)
      }
    )
  }
  // this return fav movies that added to an array not to list
  showFav(){
    this.session_id = localStorage.getItem('session_id')
    const account_id = localStorage.getItem('account_id')
    this._user.showFav(account_id, this.session_id).subscribe(
      res=>{
        console.log(res.results)
        //localStorage.setItem('fav' , res.results)
      }
    )
  }

}
