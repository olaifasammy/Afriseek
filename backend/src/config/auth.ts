const jwtSecret =
  process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error(
    "JWT_SECRET missing"
  );
}

export const AUTH_CONFIG = {
  jwtSecret,
  accessTokenExpiresIn: "15m" as const
};
