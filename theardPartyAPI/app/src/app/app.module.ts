import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DOCUMENT } from '@angular/common';
import { UserInterceptor } from './interceptor/user.interceptor';
import { environment } from './../environments/environment';
// import { AngularFireModule } from '@angular/fire'
// import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore'
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RedirectcomponentComponent } from './pages/redirectcomponent/redirectcomponent.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';
import { NowPlayComponent } from './pages/now-play/now-play.component';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component'; 
import { from } from 'rxjs';
import { MovieUIComponent } from './pages/movie-ui/movie-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    RedirectcomponentComponent,
    TopRatedComponent,
    UpcommingComponent,
    NowPlayComponent,
    NavComponent,
    LoginComponent,
    MovieUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule ,
    //AngularFontAwesomeModule    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: UserInterceptor ,
      multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
