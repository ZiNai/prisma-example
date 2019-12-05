import { ArticleManager } from "../../src/managers/article_manager";
import { Article } from "../../src/models/article";
import { Repository } from "../../src/contracts/repository";
test("getArticles_noArticlesInDB_emptyList", async () => {
  const articleManager = new ArticleManager(new EmptyMockRepository());
  const articles: Article[] = await articleManager.getArticles();
  expect(articles.length).toBe(0);
});
test("getArticles_oneArticleInDB_ListOfOneArticle", async () => {
  const articleManager = new ArticleManager(new SingleMockRepository());
  const articles: Article[] = await articleManager.getArticles();
  expect(articles.length).toBe(1);
});

class EmptyMockRepository implements Repository {
  async articles(): Promise<Article[]> {
    return [];
  }
}
class SingleMockRepository implements Repository {
  async articles(): Promise<Article[]> {
    return [new Article("Lord Of The Rings", 5)];
  }
}
