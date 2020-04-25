export interface ArticleModel {
  id: number,
  title: string,
  text: string,
  preview_text: string,
  icon: string,
  category: [],
  previous_article: number,
  next_article: number,
  published: boolean,
  upload_date: string | Date
}
