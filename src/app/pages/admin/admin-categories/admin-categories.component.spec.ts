import {async, ComponentFixture, TestBed} from '@angular/core/testing'
import {DatabaseService}                  from '../../../services/database-connection/database.service'
import {DatabaseServiceMock}              from '../../../services/database-connection/database.service.mock'

import {AdminCategoriesComponent} from './admin-categories.component'


describe('AdminCategoriesComponent', () => {
  let component: AdminCategoriesComponent
  let fixture: ComponentFixture<AdminCategoriesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCategoriesComponent],
      providers: [{provide: DatabaseService, useClass: DatabaseServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have the category edit component hidden', function () {
    expect(component.editing).toBeFalsy()
  })
})
