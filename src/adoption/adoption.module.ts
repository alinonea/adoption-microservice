import { Module } from '@nestjs/common';
import { AdoptionService} from './adoption.service';
import { AdoptionController } from './adoption.controller';

@Module({
  providers: [AdoptionService],
  controllers: [AdoptionController],
  exports:[AdoptionService]
})
export class AdoptionModule {}
