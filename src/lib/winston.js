import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "log-apollo-express-mongo-boilerplate.log",
    }),
  ],
});

export default logger;
