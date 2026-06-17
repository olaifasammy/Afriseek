export const AUTH_CONFIG = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "CHANGE_THIS_IN_PRODUCTION",

  accessTokenExpiresIn: "7d" as const
};
