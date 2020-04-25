export interface ArticleModel {
  id: number,
  title: string,
  description: string,
  icon: string,
  category: [],
  previous_article: number,
  next_article: number,
  published: boolean,
  upload_data: string | Date
}
