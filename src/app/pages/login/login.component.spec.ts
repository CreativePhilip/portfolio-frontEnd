import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MainNavComponent } from "../../components/navbars/main-nav/main-nav.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthServiceMock } from "../../services/auth/auth.service.mock";
import { AuthService } from "../../services/auth/auth-service.service";
import { provideMockStore } from "@ngrx/store/testing";
import { AuthModel } from "../../state-management/auth-state/auth-model";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, MainNavComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [{ provide: AuthService, useClass: AuthServiceMock},
      provideMockStore({ initialState })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
