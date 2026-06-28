import { query } from "../../../config/database";
import { Event } from "../../../types/event";
import { EventRepository } from "../../../core/repositories/EventRepository";

export class PostgreSQLEventRepository implements EventRepository {

  async findAll(): Promise<Event[]> {
    const { rows } = await query("SELECT * FROM events");
    return rows.map((r: any) => ({
      id: r.id,
      slug: r.slug,
      name: r.name,
      description: r.description,
      eventType: r.event_type,
      entityId: r.entity_id,
      startDate: r.start_date,
      endDate: r.end_date,
      metadata: typeof r.metadata === 'string' ? JSON.parse(r.metadata) : r.metadata
    }));
  }

  async findBySlug(slug: string): Promise<Event | null> {
    const { rows: [event] } = await query("SELECT * FROM events WHERE slug = $1", [slug]);
    if (!event) return null;
    return {
      id: event.id,
      slug: event.slug,
      name: event.name,
      description: event.description,
      eventType: event.event_type,
      entityId: event.entity_id,
      startDate: event.start_date,
      endDate: event.end_date,
      metadata: typeof event.metadata === 'string' ? JSON.parse(event.metadata) : event.metadata
    };
  }

  async create(event: Event): Promise<void> {
    await query(`
      INSERT INTO events (id, slug, name, description, event_type, entity_id, start_date, end_date, metadata)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `, [event.id, event.slug, event.name, event.description, event.eventType, event.entityId, event.startDate, event.endDate, JSON.stringify(event.metadata)]);
  }

  async update(event: Event): Promise<void> {
    await query(`
      UPDATE events 
      SET slug = $1, name = $2, description = $3, event_type = $4, entity_id = $5, start_date = $6, end_date = $7, metadata = $8
      WHERE id = $9
    `, [event.slug, event.name, event.description, event.eventType, event.entityId, event.startDate, event.endDate, JSON.stringify(event.metadata), event.id]);
  }
}
