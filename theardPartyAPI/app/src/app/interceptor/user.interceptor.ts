import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesService } from '../services/services.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor( private _user:ServicesService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(request.url)
    const token = "Bearer " + "lllllll"
  
    request = request.clone({
      headers:request.headers.set('Authorization', token)
    })
    request = request.clone({
      headers:request.headers.set('Content-Type' , 'application/json;charset=utf-8')
      
    })

    return next.handle(request);
  }
}
