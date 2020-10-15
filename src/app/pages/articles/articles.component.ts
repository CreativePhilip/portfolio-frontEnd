import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database-connection/database.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryModel} from '../../services/database-connection/Models/CategoryModel';
import {ArticleModel} from '../../services/database-connection/Models/ArticleModel';


@Component({
             selector: 'app-articles',
             templateUrl: './articles.component.html',
             styleUrls: ['./articles.component.scss']
           })
export class ArticlesComponent implements OnInit, OnDestroy {
  currentCategory: CategoryModel;
  articleList: ArticleModel[];
  private routeParamSubscription;

  constructor(private db: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(value => {
      this.db.getCategory(value.id).subscribe(value1 => {
        this.currentCategory = value1;
        this.db.getArticlesByCategory(value1.id).subscribe(value2 => {
          this.articleList = value2;
          console.log(value2);
        });

      });
    });
  }

  ngOnDestroy(): void {
    this.routeParamSubscription.unsubscribe();
  }

  articleReadClick(article: ArticleModel) {
    this.router.navigateByUrl(`/article/${article.id}`);
  }

}
