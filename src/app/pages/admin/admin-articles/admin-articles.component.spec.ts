import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesComponent } from './admin-articles.component';
import { AdminArticlesEditComponent } from "../admin-articles-edit/admin-articles-edit.component";
import { MatHeaderRowDef, MatRowDef, MatTable } from "@angular/material/table";
import { MatIcon } from "@angular/material/icon";
import { LoadingIndicatorComponent } from "../../../components/loading-indicator/loading-indicator.component";
import { MatCard, MatCardHeader } from "@angular/material/card";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { EditorComponent } from "@tinymce/tinymce-angular";
import { MatOption, MatPseudoCheckbox, MatRipple } from "@angular/material/core";
import { MatSelect, MatSelectTrigger } from "@angular/material/select";
import { MatProgressBar } from "@angular/material/progress-bar";
import { ObserversModule } from "@angular/cdk/observers";
import { CommonModule } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('AdminArticlesComponent', () => {
  let component: AdminArticlesComponent;
  let fixture: ComponentFixture<AdminArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminArticlesComponent,
        AdminArticlesEditComponent,
        MatTable,
        MatIcon,
        MatHeaderRowDef,
        MatRowDef,
        LoadingIndicatorComponent,
        MatCardHeader,
        MatCard,
        MatLabel,
        MatFormField,
        MatError,
        EditorComponent,
        MatOption,
        MatSelect,
        MatProgressBar,
        MatPseudoCheckbox,
        MatRipple,
        MatSelectTrigger,
      ],
    imports: [
      ReactiveFormsModule,
      ObserversModule,
    ],
    // schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
