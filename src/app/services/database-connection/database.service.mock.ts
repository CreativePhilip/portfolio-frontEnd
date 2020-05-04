import { of } from "rxjs";

export class DatabaseServiceMock {

  getArticle(number) {
    return of()
  }

  getCategories() {
    return of()
  }

  getCategory(number) {
    return of()
  }
}
