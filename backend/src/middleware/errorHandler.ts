import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  logger.error({ err }, "❌ [Unhandled Error]");

  const status = err?.status || err?.statusCode || 500;
  const code = err?.code || 'INTERNAL_SERVER_ERROR';

  res.status(status).json({
    success: false,
    error: {
      code,
      message: err?.message || "Internal Server Error"
    }
  });
}
