import { Request, Response } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { getDependencies } from '../config/dependencies';

const { roleService } = getDependencies();

/**
 * Controller for managing user roles, permissions, and administrative auditing.
 */
export const AdminRoleController = {
  // List all available roles
  getRoles: asyncHandler(async (_req: Request, res: Response) => {
    const roles = await roleService.getAllRoles();
    res.json({ roles });
  }),

  // Assign a role to a user
  assignRole: asyncHandler(async (req: Request, res: Response) => {
    const userId = req.params.userId as string;
    const { role } = req.body;
    await roleService.assignRole(userId, role);
    res.status(200).json({ message: `Role ${role} assigned to user ${userId}` });
  }),

  // Revoke a role from a user
  revokeRole: asyncHandler(async (req: Request, res: Response) => {
    const userId = req.params.userId as string;
    const { role } = req.params;
    await roleService.revokeRole(userId, role as any);
    res.status(200).json({ message: `Role ${role} revoked from user ${userId}` });
  }),

  // Track user activity
  getUserActivity: asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;
    // Implementation: Query Audit Logs
    res.status(200).json({ userId, activity: [] });
  }),
};

export default AdminRoleController;
