import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import { MainNavComponent } from "../../components/navbars/main-nav/main-nav.component";
import { RouterTestingModule } from "@angular/router/testing";
import { DatabaseService } from "../../services/database-connection/database.service";
import { DatabaseServiceMock } from "../../services/database-connection/database.service.mock";

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesComponent, MainNavComponent ],
      imports: [ RouterTestingModule ],
      providers: [{provide: DatabaseService, useClass: DatabaseServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
