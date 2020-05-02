import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../../services/database-connection/database.service";
import { ArticleModel } from "../../../services/database-connection/Models/ArticleModel";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
  articleList: ArticleModel[] = [];
  tableColumns: string[] = ['id', 'title', 'preview', 'upload_date', 'published', 'actions']

  edit = false;
  selectedArticle = null;

  constructor(private db: DatabaseService) {
  }

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
    this.edit = false;
    setTimeout(() =>{
      this.edit = true;
      this.selectedArticle = article;
    }, 1)
  }

  createHandler() {
    this.edit = false;
    setTimeout(() =>{
      this.edit = true;
      this.selectedArticle = null;
    }, 1)
  }

  crudAction(val) {
    this.edit = false;
    this.ngOnInit();
  }
}
