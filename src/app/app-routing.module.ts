import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {ArticlesComponent} from './pages/articles/articles.component';
import {ArticleComponent} from './pages/article/article.component';
import {LoginComponent} from './pages/login/login.component';
import {AdminHomeComponent} from './pages/admin/admin-home/admin-home.component';
import {IsAuthenticatedGuard} from './guards/is-authenticated/is-authenticated.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: ArticlesComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate: [IsAuthenticatedGuard]}
];


@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
