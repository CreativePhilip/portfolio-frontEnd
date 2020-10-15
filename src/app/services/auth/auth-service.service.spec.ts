import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthModel} from '../../state-management/auth-state/auth-model';
import {MockStore, provideMockStore} from '@ngrx/store/testing';


describe('AuthServiceService', () => {

  let store: MockStore;
  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };


  beforeEach(() => TestBed.configureTestingModule({
                                                    imports: [HttpClientTestingModule],
                                                    providers: [provideMockStore({initialState})]
                                                  }).compileComponents()
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
