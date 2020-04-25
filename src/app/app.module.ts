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
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer
    }),
    ReactiveFormsModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
