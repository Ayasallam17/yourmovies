import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _user:ServicesService, private _router:Router) { }

  ngOnInit(): void {
    this.handleAccount()
  }
  // create session id to use user data
  async handleAccount(){
    // first step to generate session is to create a request token 
    // i used await so i can make the three step sequential
    const data =  await this._user.generateToken().toPromise()
    localStorage.setItem('usertoken', data.request_token)

    // second step need to forward to a specific url that is in api documentaion
    // create a component(it's path is permission) and i forward the url to it
    this._router.navigateByUrl('permission')
    console.log("ok")
  }

}
