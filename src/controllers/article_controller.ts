import { Response, Request } from "express";
import { ArticleManager } from "../managers/article_manager";
import { PrismaRepository } from "../../src/resources/prisma_repository";

class ArticleController {
  private articleManager: ArticleManager;
  constructor() {
    this.articleManager = new ArticleManager(new PrismaRepository());
  }
  index = async (req: Request, res: Response) => {
    const articles = await this.articleManager.getArticles();
    res.json(articles);
  };
}
export default new ArticleController();
