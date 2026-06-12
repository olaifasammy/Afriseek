import { Request, Response, NextFunction }
from "express";

export function requireSecretKey(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const verified =
    req.headers[
      "x-secret-verified"
    ];

  if (
    verified !== "true"
  ) {

    return res.status(403).json({
      success: false,
      message:
        "Secret key verification required"
    });
  }

  next();
}
