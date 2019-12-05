import * as request from "supertest";
import { app } from "../../src/server";
import { Article } from "../../src/models/article";
import { prisma as db } from "../../prisma/generated/prisma-client";

describe("GET /articles", () => {
  it("SHOULD return 200Ok", async done => {

    await db.deleteManyArticles({});
    request(app)
      .get("/articles")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it("SHOULD return list of 2 articles WHEN db contains 2 articles", async done => {
    const articles = [
      new Article("java with JVM", 3),
      new Article("extracting iron from Mars", 8)
    ];

    await db.deleteManyArticles({});
    await db.createArticle(articles[0]);
    await db.createArticle(articles[1]);

    request(app)
      .get("/articles")
      .end((err, res) => {
        expect(res.body).toEqual(articles);
        done();
      });
  });
});
