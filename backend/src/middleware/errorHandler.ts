import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("❌ [Unhandled Error]:", err);

  const status = err?.status || err?.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err?.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err
  });
}
