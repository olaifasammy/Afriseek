import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error({ err }, "❌ [Unhandled Error]");

  const status = err?.status || err?.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err?.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err
  });
}
