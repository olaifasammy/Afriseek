export class SecretKeyService {

  verify(
    provided: string,
    stored: string
  ): boolean {

    return (
      provided === stored
    );
  }

  generate(): string {

    return (
      Math.random()
      .toString(36)
      .substring(2, 12)
      .toUpperCase()
    );
  }
}
