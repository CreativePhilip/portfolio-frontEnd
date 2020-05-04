import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { MainNavComponent } from "../../components/navbars/main-nav/main-nav.component";
import { CategoryCardComponent } from "../../components/category-card/category-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { DatabaseService } from "../../services/database-connection/database.service";
import { DatabaseServiceMock } from "../../services/database-connection/database.service.mock";

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesComponent, MainNavComponent, CategoryCardComponent ],
      imports: [RouterTestingModule],
      providers: [{ provide: DatabaseService, useClass: DatabaseServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
