import { EntityService } from "./EntityService";
import { ArticleService } from "./ArticleService";
import { searchEventEmitter } from "../infrastructure/events/SearchEventEmitter";
import { SearchQueryDto } from "../dtos/search/searchQuery.dto";

export class SearchService {
  constructor(
    private entities: EntityService,
    private articles: ArticleService
  ) {}

  async search(queryDto: SearchQueryDto) {
    // Search Validation
    if (!queryDto.query || queryDto.query.trim().length < 2) {
      throw new Error("Search query must be at least 2 characters long.");
    }

    const q = queryDto.query.toLowerCase();
    
    // Perform search
    const entities = (await this.entities.getAll()).filter(e =>
      e.name.toLowerCase().includes(q)
    );

    const articles = (await this.articles.getAll()).filter(a =>
      a.title.toLowerCase().includes(q)
    );

    searchEventEmitter.emitSearchPerformed(queryDto);

    return {
      entities,
      articles
    };
  }
}
