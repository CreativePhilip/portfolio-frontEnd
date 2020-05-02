import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {DatabaseEndpoints} from "./databaseEndpoints";
import {ArticleModel} from "./Models/ArticleModel";
import {CategoryModel} from "./Models/CategoryModel";
import { MiniArticleModel } from "./Models/MiniArticleModel";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {
  }

  getArticles() { return this.http.get<ArticleModel[]>(`${DatabaseEndpoints.articles}/published/`, {}); }

  /**
   * returns all articles minified, published or not, requires administrator level privileges, excludes the one supplied
   * **/
  getAllArticlesMini(id) { return this.http.get<MiniArticleModel[]>(`${DatabaseEndpoints.articles}${id}/all_articles_shortened/`, {}); }

  /**
   * returns all articles, published or not, requires administrator level privileges, excludes the one supplied
   * **/
  getAllArticles(id) { return this.http.get<ArticleModel[]>(`${DatabaseEndpoints.articles}${id}/all_articles/`, {}); }

  getArticlesByCategory(categoryId) {
    let params = new HttpParams().set("category", categoryId);

    return this.http.get<ArticleModel[]>(DatabaseEndpoints.articles, { params: params });
  }

  getArticle(id) { return this.http.get<ArticleModel>(`${DatabaseEndpoints.articles}${id}/`, {}); }

  createArticle(payload) { return this.http.post<ArticleModel>(`${DatabaseEndpoints.articles}`, payload); }
  updateArticle(id, payload) { return this.http.patch<ArticleModel>(`${DatabaseEndpoints.articles}${id}/`, payload); }

  updateArticleCategories(id, payload) {return this.http.post(`${DatabaseEndpoints.articles}${id}/edit_categories/`, payload)}

  getCategories() { return this.http.get<CategoryModel[]>(DatabaseEndpoints.categories, {}); }
  getCategory(id) { return this.http.get<CategoryModel>(`${DatabaseEndpoints.categories}${id}/`, {}); }


  getImageFromServer(link) { return this.http.get(link, {responseType: "blob"}); }
}
