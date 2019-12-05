import { Article } from "../models/article";
export interface Repository  {
  articles(): Promise<Article[]>;
}