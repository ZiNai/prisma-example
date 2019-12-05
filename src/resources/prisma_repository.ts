import { Repository } from "../contracts/repository";
import { Article } from "../models/article";
import { prisma } from "../../prisma/generated/prisma-client/index";
export class PrismaRepository implements Repository{
 async articles(): Promise<Article[]> {
    return await prisma.articles().$fragment("{ title pages}");
 }
}