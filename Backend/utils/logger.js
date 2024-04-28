const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  let color;
  switch (level) {
    case 'error':
      color = '\x1b[31m'; 
      break;
    case 'warn':
      color = '\x1b[33m'; 
      break;
    case 'info':
      color = '\x1b[36m'; 
      break;
    case 'debug':
      color = '\x1b[35m'; 
      break;
    default:
      color = '\x1b[0m'; 
  }
  return `${color}[${level.toUpperCase()}] ${timestamp} ${message}\x1b[0m`;
});

const logger = createLogger({
  level: "debug",
  format: combine(
    timestamp({ format: "HH:mm:ss" }),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' })
  ]
});

module.exports = logger;
