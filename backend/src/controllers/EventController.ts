import { Request, Response }
from "express";

import { createEventService }
from "../bootstrap/createEventService";

const service =
  createEventService();

export class EventController {

  getAll = async (
    req: Request,
    res: Response
  ) => {

    try {

      const events =
        await service.getAll();

      return res.json({

        success: true,

        data: events

      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to load events"

      });
    }
  };

  getBySlug = async (
    req: Request,
    res: Response
  ) => {

    try {

      const event =
        await service.getBySlug(
          String(
            req.params.slug
          )
        );

      if (!event) {

        return res.status(404).json({

          success: false,

          message:
            "Event not found"

        });
      }

      return res.json({

        success: true,

        data: event

      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to load event"

      });
    }
  };

  create = async (
    req: Request,
    res: Response
  ) => {

    try {

      await service.create(
        req.body
      );

      return res.status(201).json({

        success: true

      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to create event"

      });
    }
  };
}
