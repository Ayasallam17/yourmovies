import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirectcomponent',
  templateUrl: './redirectcomponent.component.html',
  styleUrls: ['./redirectcomponent.component.css']
})
export class RedirectcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // component used to redirect to the auth url 
    // the idea of use this component is to remain in app not forword to external url so i used router module
    const token = localStorage.getItem('usertoken')
    // pass to another component to create session
    window.location.href= `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:4200/movies`
  }


}
