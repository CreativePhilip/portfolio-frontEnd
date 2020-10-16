import {inject, TestBed}             from '@angular/core/testing'
import {MockStore, provideMockStore} from '@ngrx/store/testing'
import {AuthModel}                   from '../../state-management/auth-state/auth-model'

import {IsAdminGuard} from './is-admin.guard'


describe('IsAdminGuard', () => {

  let store: MockStore

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAdminGuard, provideMockStore({initialState})]
    })
  })

  it('should create', inject([IsAdminGuard], (guard: IsAdminGuard) => {
    expect(guard).toBeTruthy()
  }))
})
