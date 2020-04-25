import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainNavComponent } from './components/navbars/main-nav/main-nav.component';
import { AttributionsComponent } from './components/attributions/attributions.component';
import { MainFooterComponent } from './components/footers/main-footer/main-footer.component';
import { HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    AttributionsComponent,
    MainFooterComponent,
    CategoriesComponent,
    CategoryCardComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
