export class UserInvitationService {
  async getAll() {
    return [];
  }

  async create(email: string) {
    return {
      email,
      invited: true
    };
  }
}
