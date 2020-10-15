import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database-connection/database.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleModel} from '../../services/database-connection/Models/ArticleModel';


@Component({
             selector: 'app-article',
             templateUrl: './article.component.html',
             styleUrls: ['./article.component.scss']
           })
export class ArticleComponent implements OnInit {
  article: ArticleModel;


  constructor(private db: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.db.getArticle(value.id).subscribe(value1 => {
        this.article = value1;
        this.article.upload_date = new Date(this.article.upload_date);
      });
    });
  }

  articleNavigationClick(id) {
    this.router.navigateByUrl(`/article/${id}`);
  }


}
