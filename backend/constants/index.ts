export const testEnv = {
  NODEMAILER_SERVICE: "valid-service-name",
  NODEMAILER_USER: "testuser",
  NODEMAILER_PASS: "testpass",
  NODEMAILER_FROM: "testuser@email.com",
  NODEMAILER_HOST: "valid-host",
  NODEMAILER_PORT: "999",
} as Record<string, string>;

export const DEFAULT_ERROR_MESSAGE = "Something went wrong!";
export const DEFAULT_MONGOOSE_ERROR_MESSAGE = DEFAULT_ERROR_MESSAGE;

export const PORT = process.env.PORT || 3001;
export const HOST = process.env.BACKEND_HOST || "http://localhost";
export const BASE_URL = `${HOST}:${PORT}/`;
export const NODE_ENV = process.env.NODE_ENV || "local";

/** this api urls can be access without need of user email verified */
export const ALLOWED_URLS_WO_MAIL_VERIFIED = [
  {
    path: "/user/resendEmailVerification/",
    method: ["POST"],
  },
];

/** this api urls can be access without need of user logged in */
export const ALLOWED_API_REQ_WO_USER_LOGGED_IN = [
  {
    path: "/organizations/invitations/accept",
    method: ["GET"],
  },
];