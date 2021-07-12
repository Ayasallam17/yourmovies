import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { MovieUIComponent } from './pages/movie-ui/movie-ui.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NavComponent } from './pages/nav/nav.component';
import { NowPlayComponent } from './pages/now-play/now-play.component';
import { RedirectcomponentComponent } from './pages/redirectcomponent/redirectcomponent.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';

const routes: Routes = [
  {path : "", component:HomeComponent },
  {path : "movies", component:MoviesComponent },
  {path: "permission" , component: RedirectcomponentComponent},
  {path: "top-rated" , component: TopRatedComponent},
  {path: "up-coming" , component: UpcommingComponent },
  {path: "now-play" , component: NowPlayComponent},
  {path:"login" , component:LoginComponent },
  {path:"movieui/:id" , component:MovieUIComponent }

  // {path : "permission", loadChildren: ()=> new promise( () =>{ if(window.location.href.match(/permission/))
  // window.location.href=`https://www.themoviedb.org/authenticate` } ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
