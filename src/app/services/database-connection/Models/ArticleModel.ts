export interface ArticleModel {
  id: number,
  title: string,
  description: string,
  preview_text: string,
  icon: string,
  category: [],
  previous_article: number,
  next_article: number,
  published: boolean,
  upload_data: string | Date
}
