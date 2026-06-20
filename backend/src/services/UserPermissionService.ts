export class UserPermissionService {
  async getAll() {
    return [];
  }

  async assign(userId: string, permissions: string[]) {
    return { userId, permissions };
  }
}
