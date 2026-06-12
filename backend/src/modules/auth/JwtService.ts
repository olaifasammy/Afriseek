export class JwtService {

  generateToken(
    userId: string
  ): string {

    return `token-${userId}`;
  }

  verifyToken(
    token: string
  ): boolean {

    return token.startsWith(
      "token-"
    );
  }
}
