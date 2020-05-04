import { TestBed, async, inject } from '@angular/core/testing';

import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AuthModel } from "../../state-management/auth-state/auth-model";
import { RouterTestingModule } from "@angular/router/testing";

describe('IsAuthenticatedGuard', () => {

  let store: MockStore;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthenticatedGuard, provideMockStore({initialState})],
      imports: [RouterTestingModule]
    });
  });

  it('should create', inject([IsAuthenticatedGuard], (guard: IsAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
