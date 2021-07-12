import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  token = ""
  commonUrl = "https://api.themoviedb.org/3"
  movieCommonUrl = "https://api.themoviedb.org/3/movie"
  constructor( private _http:HttpClient  ) { }


  // return a spesific movie 
  getMovie(movie_id:any):Observable<any>{
    return this._http.get(`${this.movieCommonUrl}/${movie_id}?api_key=c6ad81b81dd1a30a8df5ec663c995f97`)
  }
  // this api return top rated movies
  getTopRatedMovie():Observable<any>{
    return this._http.get(`${this.movieCommonUrl}/top_rated?api_key=c6ad81b81dd1a30a8df5ec663c995f97&language=en-US&page=1`)
  }
  getNowPlayingMovie():Observable<any>{
    return this._http.get(`${this.movieCommonUrl}/now_playing?api_key=c6ad81b81dd1a30a8df5ec663c995f97&language=en-US&page=1`)
  }
  getUpcomingMovie():Observable<any>{
    return this._http.get(`${this.movieCommonUrl}/upcoming?api_key=c6ad81b81dd1a30a8df5ec663c995f97&language=en-US&page=1`)
  }
  // get source of images 
  conf():Observable<any>{
    return this._http.get(`${this.commonUrl}/configuration?api_key=c6ad81b81dd1a30a8df5ec663c995f97`)
  }


  // handle creating session id create token then create session
  generateToken():Observable<any>{
    return this._http.get(`${this.commonUrl}/authentication/token/new?api_key=c6ad81b81dd1a30a8df5ec663c995f97`)
  }
  generateSession(token={}):Observable<any>{
    return this._http.post(`${this.commonUrl}/authentication/session/new?api_key=c6ad81b81dd1a30a8df5ec663c995f97` , token)
  }

  // to create alist to add fav
  createList(data:any  ,  session_id:any):Observable<any>{
    console.log(data)
    return this._http.post(`${this.commonUrl}/list?api_key=c6ad81b81dd1a30a8df5ec663c995f97&session_id=${session_id}` , data)
  }
  getList(list_id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}/list/${list_id}?api_key=c6ad81b81dd1a30a8df5ec663c995f97`)
  }
  addFavMovie(data:any  , list_id:any ,  session_id:any):Observable<any>{
    console.log(data)
    return this._http.post(`${this.commonUrl}/list/${list_id}/add_item?api_key=c6ad81b81dd1a30a8df5ec663c995f97&session_id=${session_id}` , data)
  }


  // those api add fav movie to the account
  addToFav(data:any ,account_id :any,  session_id:any):Observable<any>{
    return this._http.post(`${this.commonUrl}/account/${account_id}/favorite?api_key=c6ad81b81dd1a30a8df5ec663c995f97&session_id=${session_id}` , data)
  }
  // display fav movies but it can't handle remove one of movies so i should crate list first
  showFav(account_id :any,  session_id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}/account/${account_id}/favorite/movies?api_key=c6ad81b81dd1a30a8df5ec663c995f97&session_id=${session_id}`)
  }


  // a way to get info about images
  getimg(id:any):Observable<any>{
    return this._http.get(`${this.movieCommonUrl}/${id}/images?api_key=c6ad81b81dd1a30a8df5ec663c995f97&language=en-US&page=1`)
  }

  // get account details
  account(session_id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}/account?api_key=c6ad81b81dd1a30a8df5ec663c995f97&session_id=${session_id}`)
  }
  // login with username and password
  login(data:any):Observable<any>{
    console.log(data)
    return this._http.post(`${this.commonUrl}/authentication/token/validate_with_login?api_key=c6ad81b81dd1a30a8df5ec663c995f97` , data)
  }
  
  

}
