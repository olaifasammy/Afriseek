import { env } from "./env";

export const AUTH_CONFIG = {
  jwtSecret: env.JWT_SECRET,
  accessTokenExpiresIn: "15m" as const
};
