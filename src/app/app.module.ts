import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainNavComponent } from './components/navbars/main-nav/main-nav.component';
import { AttributionsComponent } from './components/attributions/attributions.component';
import { MainFooterComponent } from './components/footers/main-footer/main-footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./state-management/auth-state/auth-reducer";
import { TokenInterceptor } from "./services/token-interceptor/token-interceptor.interceptor";
import { LoginComponent } from './pages/login/login.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AdminArticlesComponent } from './pages/admin/admin-articles/admin-articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AdminArticlesEditComponent } from './pages/admin/admin-articles-edit/admin-articles-edit.component';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


import { EditorModule } from '@tinymce/tinymce-angular';
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { AdminCategoriesEditComponent } from './pages/admin/admin-categories-edit/admin-categories-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    AttributionsComponent,
    MainFooterComponent,
    CategoriesComponent,
    CategoryCardComponent,
    ArticlesComponent,
    ArticleComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminArticlesComponent,
    AdminArticlesEditComponent,
    LoadingIndicatorComponent,
    AdminCategoriesComponent,
    AdminCategoriesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    EditorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
