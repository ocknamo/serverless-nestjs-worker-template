import { Module, Global, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MyLoggerService } from './my-logger/my-logger.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ envFilePath: './config/.env' })],
  providers: [MyLoggerService, Logger],
  exports: [MyLoggerService, ConfigModule],
})
export class CommonModule {}
