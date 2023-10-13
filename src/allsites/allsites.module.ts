import { Module } from '@nestjs/common';
import { AllsitesService } from './allsites.service';
import { AllsitesController } from './allsites.controller';

@Module({
  controllers: [AllsitesController],
  providers: [AllsitesService],
})
export class AllsitesModule {}
