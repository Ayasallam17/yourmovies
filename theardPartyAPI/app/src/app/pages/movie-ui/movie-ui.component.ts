import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-movie-ui',
  templateUrl: './movie-ui.component.html',
  styleUrls: ['./movie-ui.component.css']
})
export class MovieUIComponent implements OnInit {
  poster_path:any
  imgUrl=""
  id:any
  comments :string [] = []
  comment=""
  like = 0
  constructor(private _user:ServicesService , private _router:Router,
    private _activatedRoute : ActivatedRoute,private db:AngularFireDatabase , 
    private firestore:AngularFirestore) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id')
    this.getMovie(this.id)
    this.handleConfig()

  }
  moviedata ={ comments : this.comments , likes: this.like} 
  addLike(movie_id:any){
    this.moviedata.likes++
    this.firestore.collection('comments').doc(movie_id).set(this.moviedata)

  }
  addComment(movies_id:any){
    this.moviedata.comments.push(this.comment)
    // const moviedata ={ comments : this.comments , likes: this.like}
    this.firestore.collection('comments').doc(movies_id).set(this.moviedata)
  }
  // this component display one page of now play movies come from api 
  getMovie(movie_id:any){
    this._user.getMovie(movie_id).subscribe(
      res =>{
        //console.log(res.poster_path)
        this.poster_path= res.poster_path
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
