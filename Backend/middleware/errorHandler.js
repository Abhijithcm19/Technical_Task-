const logger = require("../utils/logger");
const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      logger.error("Validation Failed:", err.stack);
      res.json({
        title: "Validation Failed",
        message: err.message,
      });
      break;
    case constants.NOT_FOUND:
      logger.error("Not Found:", err.stack);
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case constants.UNAUTHORIZED:
      logger.error("Unauthorized:", err.stack);
      res.json({
        title: "Unauthorized",
        message: err.message,
      });
      break;
    case constants.FORBIDDEN:
      logger.error("Forbidden:", err.stack);
      res.json({
        title: "Forbidden",
        message: err.message,
      });
      break;
    case constants.SERVER_ERROR:
    default:
      logger.error("Server Error:", err.stack);
      res.status(500).json({
        title: "Server Error",
        message: err.message,
      });
      break;
  }
};

module.exports = errorHandler;


// function errorHandler(err, req, res, next) {
//   logger.error(err.stack);
//   res.status(500).json({ error: "Internal Server Error" });
// }

// module.exports = errorHandler;