export class PasswordService {

  async hash(
    password: string
  ): Promise<string> {

    return password;
  }

  async verify(
    password: string,
    hash: string
  ): Promise<boolean> {

    return password === hash;
  }
}
