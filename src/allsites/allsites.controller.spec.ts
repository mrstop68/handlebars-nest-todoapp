import { Test, TestingModule } from '@nestjs/testing';
import { AllsitesController } from './allsites.controller';
import { AllsitesService } from './allsites.service';

describe('AllsitesController', () => {
  let controller: AllsitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllsitesController],
      providers: [AllsitesService],
    }).compile();

    controller = module.get<AllsitesController>(AllsitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
