import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JobService } from './modules/job/job.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const jobService = app.get(JobService);

  jobService.execute();
}

export const handler = () => {
  bootstrap();
};
handler();
