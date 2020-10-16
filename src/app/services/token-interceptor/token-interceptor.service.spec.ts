import {HTTP_INTERCEPTORS}       from '@angular/common/http'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed}                 from '@angular/core/testing'
import {provideMockStore}        from '@ngrx/store/testing'
import {AuthModel}               from '../../state-management/auth-state/auth-model'

import {TokenInterceptor} from './token-interceptor.interceptor'


describe('TokenInterceptorService', () => {

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  }

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor,
      provideMockStore({initialState}),
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    ],
    imports: [HttpClientTestingModule]
  }))

  it('should be created', () => {
    const service: TokenInterceptor = TestBed.get(TokenInterceptor)
    expect(service).toBeTruthy()
  })

})
