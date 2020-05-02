import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../../services/database-connection/database.service";
import { ArticleModel } from "../../../services/database-connection/Models/ArticleModel";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
  articleList: ArticleModel[] = [];
  tableColumns: string[] = ['id', 'title', 'preview', 'upload_date', 'actions']

  edit = false;
  selectedArticle = null;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.articleList = [];
    this.db.getAllArticles(-1).subscribe(value => {
      this.articleList = value
      for (let a of this.articleList) {
        a.upload_date = new Date(a.upload_date);
      }

    });
  }


  editHandler(article) {
    this.edit = true;
    this.selectedArticle = article;
  }

  createHandler() {
    this.edit = true;
    this.selectedArticle = null;
  }

  crudAction(val) {
    this.edit = false;
    this.ngOnInit();
  }
}
