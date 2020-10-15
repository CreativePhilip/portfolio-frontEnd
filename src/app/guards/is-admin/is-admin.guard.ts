import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthModel} from '../../state-management/auth-state/auth-model';
import {Store} from '@ngrx/store';
import {AuthState} from '../../state-management/auth-state/auth-state';


@Injectable({
              providedIn: 'root'
            })
export class IsAdminGuard implements CanActivate, OnDestroy {
  auth: AuthModel;
  subscription;

  constructor(private store: Store<AuthState>) {
    this.subscription = store.select('auth').subscribe(value => {
      this.auth = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
