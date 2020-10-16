import {async, ComponentFixture, TestBed} from '@angular/core/testing'
import {RouterTestingModule}              from '@angular/router/testing'
import {AttributionsComponent}            from '../../components/attributions/attributions.component'
import {MainFooterComponent}              from '../../components/footers/main-footer/main-footer.component'
import {MainNavComponent}                 from '../../components/navbars/main-nav/main-nav.component'

import {HomeComponent} from './home.component'


describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MainNavComponent, MainFooterComponent, AttributionsComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
