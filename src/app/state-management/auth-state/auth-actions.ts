import {Action} from "@ngrx/store"
import { AuthModel } from "./auth-model";

export const LOGIN = '[AUTHMODEL] Login';
export const LOGOUT = '[AUTHMODEL] Logout';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: AuthModel) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {}
}

export type AuthActions =
  Login |
  Logout
