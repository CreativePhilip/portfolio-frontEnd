import { TestBed, async, inject } from '@angular/core/testing';

import { IsAdminGuard } from './is-admin.guard';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AuthModel } from "../../state-management/auth-state/auth-model";

describe('IsAdminGuard', () => {

  let store: MockStore;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAdminGuard, provideMockStore({initialState})]
    });
  });

  it('should create', inject([IsAdminGuard], (guard: IsAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
