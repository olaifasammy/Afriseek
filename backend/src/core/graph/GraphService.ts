import { GraphRepository } from "./GraphRepository";
import { AfriseekEntity } from "../../types/entity";

export class GraphService {

  constructor(
    private repository: GraphRepository
  ) {}

  async findEntity(
    slug: string
  ): Promise<AfriseekEntity | null> {

    return this.repository.getEntityBySlug(
      slug
    );
  }

  async getAllEntities() {

    return this.repository.getAllEntities();
  }
}
