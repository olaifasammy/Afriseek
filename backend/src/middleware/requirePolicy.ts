import { Request, Response, NextFunction } from "express";
import { getDependencies } from "../config/dependencies";
import { ForbiddenError } from "../types/api/error";

export function requirePolicy(action: string, getResource: (req: Request) => Promise<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { policyEngineService } = getDependencies();
    const user = (req as any).user;
    
    if (!user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    try {
        const resource = await getResource(req);
        const authorized = await policyEngineService.isAuthorized(user, action, resource);
        
        if (!authorized) {
            throw new ForbiddenError("You are not authorized to perform this action");
        }
        next();
    } catch (error) {
        next(error);
    }
  };
}
