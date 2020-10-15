import {of} from 'rxjs';


export class DatabaseServiceMock {

  getArticle(number) {
    return of();
  }

  getAllArticles() {
    return of();
  }

  getAllArticlesMini(number) {
    return of();
  }

  getCategories() {
    return of();
  }

  getCategory(number) {
    return of();
  }
}
