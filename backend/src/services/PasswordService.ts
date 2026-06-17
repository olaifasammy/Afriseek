import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class PasswordService {
  /**
   * Hashes a plain-text password using a secure unique salt and scrypt
   */
  async hash(password: string): Promise<string> {
    // Generate a secure 16-byte random salt
    const salt = randomBytes(16).toString("hex");
    
    // Hash using scrypt (64-byte key length)
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    
    // Store salt and hash together split by a delimiter
    return `${salt}:${derivedKey.toString("hex")}`;
  }

  /**
   * Verifies a password against an existing cryptographic hash in constant time
   */
  async verify(password: string, hash: string): Promise<boolean> {
    if (!hash.includes(":")) {
      return password === hash;
    }

    const [salt, storedKeyHex] = hash.split(":");
    if (!salt || !storedKeyHex) return false;

    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    const storedKeyBuffer = Buffer.from(storedKeyHex, "hex");

    return timingSafeEqual(derivedKey, storedKeyBuffer);
  }
}
