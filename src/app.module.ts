import { Module } from '@nestjs/common';
import { JobModule } from './modules/job/job.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, JobModule],
})
export class AppModule {}
