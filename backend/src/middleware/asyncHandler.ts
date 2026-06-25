import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Wraps an asynchronous request handler to catch errors and forward them 
 * to the next middleware (the error handler).
 */
export const asyncHandler = (fn: RequestHandler) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
