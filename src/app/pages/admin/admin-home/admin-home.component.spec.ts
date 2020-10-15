import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminHomeComponent} from './admin-home.component';
import {MainNavComponent} from '../../../components/navbars/main-nav/main-nav.component';
import {AdminArticlesComponent} from '../admin-articles/admin-articles.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DatabaseService} from '../../../services/database-connection/database.service';
import {DatabaseServiceMock} from '../../../services/database-connection/database.service.mock';
import {AdminArticlesEditComponent} from '../admin-articles-edit/admin-articles-edit.component';


describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [
                                       AdminHomeComponent,
                                       MainNavComponent,
                                       AdminArticlesComponent,
                                       AdminArticlesEditComponent,
                                     ],
                                     imports: [RouterTestingModule],
                                     providers: [{provide: DatabaseService, useClass: DatabaseServiceMock}]
                                   })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
