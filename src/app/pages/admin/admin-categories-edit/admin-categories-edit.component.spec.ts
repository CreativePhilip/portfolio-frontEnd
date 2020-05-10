import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesEditComponent } from './admin-categories-edit.component';

describe('AdminCategoriesEditComponent', () => {
  let component: AdminCategoriesEditComponent;
  let fixture: ComponentFixture<AdminCategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoriesEditComponent ]
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
