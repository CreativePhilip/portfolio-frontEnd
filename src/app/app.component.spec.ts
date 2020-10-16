import {async, TestBed}      from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {AppComponent}        from './app.component'
import {AuthService}         from './services/auth/auth-service.service'
import {AuthServiceMock}     from './services/auth/auth.service.mock'


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: AuthService, useClass: AuthServiceMock}]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('portfolio')
  })
})
