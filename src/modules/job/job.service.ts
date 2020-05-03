import { Injectable } from '@nestjs/common';
import { MyLoggerService } from '../../common/my-logger/my-logger.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JobService {
  constructor(
    private loggerService: MyLoggerService,
    private configService: ConfigService,
  ) {}

  async execute(): Promise<void> {
    this.loggerService.log('Job is started.');

    // const apiKey = this.configService.get<string>('API_KEY');
    // const apiSecret = this.configService.get<string>('API_SECRET');

    this.loggerService.log('Job is ended.');
  }
}
