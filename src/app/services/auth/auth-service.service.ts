import {HttpClient}            from '@angular/common/http'
import {Injectable, OnDestroy} from '@angular/core'
import {JwtHelperService}      from "@auth0/angular-jwt"
import {environment}           from '../../../environments/environment'


export interface AuthResponse
{
  refresh: string,
  access: string
}


export interface TokenRefresh
{
  access: string
}


@Injectable({providedIn: 'root'})
export class AuthService implements OnDestroy
{

  rootUrl = `${environment.apiUrl}/`
  tokenCheck
  jwtHelper: JwtHelperService = new JwtHelperService()
  subscription

  constructor(private http: HttpClient) {
  }

  initTokenChecks() {
  }

  ngOnDestroy(): void {
  }

  loginToServer(login: string, password: string) {
    return this.http.post<AuthResponse>(`${this.rootUrl}auth/token`, {'username': login, 'password': password})
  }

  updateToken(refresh: string) {
    return this.http.post<TokenRefresh>(`${this.rootUrl}auth/token/refresh`, {'refresh': refresh})
  }


  tokenRefresh() {

  }

  saveTokensToLocalStorage(access: string, refresh: string) {
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
  }

  loadTokensFromLocalStorage() {
  }
}
