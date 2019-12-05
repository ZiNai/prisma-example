import { Article } from "../models/article";
import { Repository } from "../contracts/repository";
export class ArticleManager {
  private repo: Repository;
  constructor(repo: Repository){
    this.repo = repo;
  }
  
  async getArticles(): Promise<Article[]> {
   const articles = await this.repo.articles();
   return articles;
  }
}