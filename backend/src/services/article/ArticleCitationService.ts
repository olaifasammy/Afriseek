import { logger } from "../../config/logger";

export class ArticleCitationService {
  async getCitations(articleId: string) {
    logger.info({ articleId }, "Fetching citations");
    return [];
  }
}
