import { Injectable, LoggerService, Logger } from '@nestjs/common';

@Injectable()
export class MyLoggerService implements LoggerService {
  constructor(private logger: Logger) {
    logger = new Logger();
  }
  log(message: string) {
    this.logger.log(`[App] ${message}`);
  }
  error(message: string, trace: string) {
    this.logger.log(`[App] ${message} \ntrace: ${trace}`);
  }
  warn(message: string) {
    this.logger.warn(`[App] ${message}`);
  }
  debug(message: string) {
    this.logger.debug(`[App] ${message}`);
  }
  verbose(message: string) {
    this.logger.verbose(`[App] ${message}`);
  }
}
