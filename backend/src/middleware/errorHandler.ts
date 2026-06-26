import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger";
import { env } from "../config/env";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  logger.error({ err }, "❌ [Unhandled Error]");

  const status = err?.status || err?.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err?.message || "Internal Server Error",
    error: env.NODE_ENV === "production" ? undefined : err
  });
}
