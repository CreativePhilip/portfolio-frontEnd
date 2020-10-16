import {Component}   from '@angular/core'
import {AuthService} from './services/auth/auth-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'portfolio'

  constructor(private auth: AuthService) {
    auth.initTokenChecks()
    auth.loadTokensFromLocalStorage()
  }
}
