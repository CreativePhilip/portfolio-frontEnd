export interface ArticleModel {
  id: number,
  title: string,
  text: string,
  preview_text: string,
  icon: any,
  categories: [],
  previous_article: number,
  next_article: number,
  published: boolean,
  upload_date: string | Date
}
