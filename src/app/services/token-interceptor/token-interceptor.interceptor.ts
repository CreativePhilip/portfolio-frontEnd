import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable, OnDestroy}                                from '@angular/core'
import {Observable}                                           from 'rxjs'


@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnDestroy
{
  private subscription

  constructor() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
  }
}
