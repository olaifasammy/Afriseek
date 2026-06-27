import { Session } from "../../types/session";

export interface SessionRepository {
  findById(id: string): Promise<Session | null>;
  findByUserId(userId: string): Promise<Session[]>;
  create(session: Session): Promise<void>;
  update(session: Session): Promise<void>;
  delete(id: string): Promise<void>;
}
