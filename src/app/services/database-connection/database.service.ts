import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatabaseEndpoints} from "./databaseEndpoints";
import {ArticleModel} from "./Models/ArticleModel";
import {CategoryModel} from "./Models/CategoryModel";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getArticles() { return this.http.get<ArticleModel[]>(DatabaseEndpoints.articles, {}); }
  getArticle(id) {return this.http.get<ArticleModel>(`${DatabaseEndpoints.articles}${id}/`, {}); }
  setNextArticle(id) { return this.http.post(`${DatabaseEndpoints}${id}/set_next/`, {id: id}); }
  setPreviousArticle(id) { return this.http.post(`${DatabaseEndpoints}${id}/set_previous/`, {id: id}); }

  getCategories() { return this.http.get<CategoryModel[]>(DatabaseEndpoints.categories, {}); }
  getCategory(id) { return this.http.get<CategoryModel>(`${DatabaseEndpoints.categories}${id}/`, {}); }
}
