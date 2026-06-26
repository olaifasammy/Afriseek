import { logger } from "../../config/logger";

export class ArticleRevisionService {
  async getRevisions(articleId: string) {
    logger.info({ articleId }, "Fetching revisions");
    return [];
  }
}
