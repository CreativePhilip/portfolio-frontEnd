import {Injectable, OnDestroy} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthState} from '../../state-management/auth-state/auth-state';
import {Store} from '@ngrx/store';
import {AuthModel} from '../../state-management/auth-state/auth-model';


@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnDestroy {
  private authData: AuthModel;
  private subscription;

  constructor(private store: Store<AuthState>) {
    this.subscription = this.store.select('auth').subscribe(value => this.authData = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authData.access != null) {
      const updatedRequest = request.clone({headers: request.headers.set('Authorization', `Bearer ${this.authData.access}`)});
      return next.handle(updatedRequest);
    } else {
      return next.handle(request);
    }
  }
}
