import { Test, TestingModule } from '@nestjs/testing';
import { JobService } from './job.service';
import { CommonModule } from '../../common/common.module';

describe('JobService', () => {
  let service: JobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      providers: [JobService],
    }).compile();
    service = module.get<JobService>(JobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
