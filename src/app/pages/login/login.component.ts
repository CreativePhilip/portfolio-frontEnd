import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/auth-service.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthState } from "../../state-management/auth-state/auth-state";
import * as AuthActions from "../../state-management/auth-state/auth-actions"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<AuthState>) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      keepLoggedIn: new FormControl(false, [])
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.authService.loginToServer(
        this.form.controls.username.value,
        this.form.controls.password.value).subscribe(value => {
          this.store.dispatch(new AuthActions.Login({
            is_logged_in: true,
            refresh: value.refresh,
            access: value.access}));

          if(this.form.value.keepLoggedIn) {
            this.authService.saveTokensToLocalStorage(value.access, value.refresh);
          }

          this.router.navigateByUrl('/admin');
      },
          error => {
          this.router.navigateByUrl("/")
          })
    }
  }


}
