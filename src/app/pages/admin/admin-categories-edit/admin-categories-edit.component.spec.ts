import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminCategoriesEditComponent} from './admin-categories-edit.component';
import {DatabaseService} from '../../../services/database-connection/database.service';
import {DatabaseServiceMock} from '../../../services/database-connection/database.service.mock';


describe('AdminCategoriesEditComponent', () => {
  let component: AdminCategoriesEditComponent;
  let fixture: ComponentFixture<AdminCategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [AdminCategoriesEditComponent],
                                     providers: [{provide: DatabaseService, useClass: DatabaseServiceMock}]
                                   })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
