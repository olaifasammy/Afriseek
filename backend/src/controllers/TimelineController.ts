import { Request, Response } from "express";
import { createEventService } from "../bootstrap/createEventService";

const events =
  createEventService();

export class TimelineController {

  getTimeline = async (
    req: Request,
    res: Response
  ) => {

    const entityId =
      String(req.params.id);

    const allEvents =
      await events.getAll();

    const filtered =
      allEvents.filter(
        (event: any) =>
          event.entityId === entityId
      );

    return res.json({
      success: true,
      data: {
        entityId,
        entries: filtered
      }
    });
  };
}
