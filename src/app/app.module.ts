import {HTTP_INTERCEPTORS, HttpClientModule}                                                          from '@angular/common/http'
import {NgModule}                                                                                     from '@angular/core'
import {ReactiveFormsModule}                                                                          from '@angular/forms'
import {MatButtonModule}                                                                              from '@angular/material/button'
import {MatCardModule}                                                                                from '@angular/material/card'
import {MatCheckboxModule}                                                                            from '@angular/material/checkbox'
import {MatFormFieldModule}                                                                           from '@angular/material/form-field'
import {MatIconModule}                                                                                from '@angular/material/icon'
import {MatInputModule}                                                                               from '@angular/material/input'
import {MatProgressBarModule}                                                                         from '@angular/material/progress-bar'
import {MatProgressSpinnerModule}                                                                     from '@angular/material/progress-spinner'
import {MatSelectModule}                                                                              from '@angular/material/select'
import {MatSnackBarModule}                                                                            from '@angular/material/snack-bar'
import {MatTableModule}                                                                               from '@angular/material/table'
import {BrowserModule}                                                                                from '@angular/platform-browser'
import {BrowserAnimationsModule}                                                                      from '@angular/platform-browser/animations'
import {NbEvaIconsModule}                                                                             from '@nebular/eva-icons'
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule, NbThemeModule} from '@nebular/theme'


import {EditorModule} from '@tinymce/tinymce-angular'

import {AppRoutingModule}             from './app-routing.module'
import {AppComponent}                 from './app.component'
import {AttributionsComponent}        from './components/attributions/attributions.component'
import {CategoryCardComponent}        from './components/category-card/category-card.component'
import {MainFooterComponent}          from './components/footers/main-footer/main-footer.component'
import {LoadingIndicatorComponent}    from './components/loading-indicator/loading-indicator.component'
import {MainNavComponent}             from './components/navbars/main-nav/main-nav.component'
import {AdminArticlesEditComponent}   from './pages/admin/admin-articles-edit/admin-articles-edit.component'
import {AdminArticlesComponent}       from './pages/admin/admin-articles/admin-articles.component'
import {AdminCategoriesEditComponent} from './pages/admin/admin-categories-edit/admin-categories-edit.component'
import {AdminCategoriesComponent}     from './pages/admin/admin-categories/admin-categories.component'
import {AdminHomeComponent}           from './pages/admin/admin-home/admin-home.component'
import {ArticleComponent}             from './pages/article/article.component'
import {ArticlesComponent}            from './pages/articles/articles.component'
import {CategoriesComponent}          from './pages/categories/categories.component'
import {HomeComponent}                from './pages/home/home.component'
import {LoginComponent}               from './pages/login/login.component'
import {TokenInterceptor}             from './services/token-interceptor/token-interceptor.interceptor'


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
    MatProgressBarModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
