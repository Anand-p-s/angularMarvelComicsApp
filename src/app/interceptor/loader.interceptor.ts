import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { Observable, finalize } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class loaderInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.showLoading();
    console.log("show loading");
    

    return next.handle(req).pipe(finalize(() => {
      this.loader.hideLoading();
    }));
  }
}
