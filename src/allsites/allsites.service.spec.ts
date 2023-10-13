import { Test, TestingModule } from '@nestjs/testing';
import { AllsitesService } from './allsites.service';

describe('AllsitesService', () => {
  let service: AllsitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllsitesService],
    }).compile();

    service = module.get<AllsitesService>(AllsitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
