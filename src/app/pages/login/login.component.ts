import {Component, OnInit}                  from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router}                             from '@angular/router'
import {NbComponentStatus}                  from "@nebular/theme"
import {AuthService}                        from '../../services/auth/auth-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  form: FormGroup

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      keepLoggedIn: ["", []]
    })
  }

  ngOnInit() {
  }

  login() {

  }

  fieldStatus(field: string): NbComponentStatus {
    const formField = this.form.controls[field]
    if (formField.touched) {
      if (formField.valid)
        return "success"
      else
        return "danger"
    } else
      return "primary"
  }


}
