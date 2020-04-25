import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {ArticlesComponent} from "./pages/articles/articles.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "categories/:id", component: ArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
