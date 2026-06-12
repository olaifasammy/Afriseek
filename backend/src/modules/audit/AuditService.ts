export class AuditService {

  async log(
    action: string,
    userId: string,
    targetId: string
  ): Promise<void> {

    console.log(
      "[AUDIT]",
      action,
      userId,
      targetId
    );
  }
}
