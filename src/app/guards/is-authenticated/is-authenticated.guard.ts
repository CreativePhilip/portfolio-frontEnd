import {Injectable, OnDestroy}                                                     from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import {Observable}                                                                from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate, OnDestroy
{

  subscription

  constructor(private router: Router) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }

}
