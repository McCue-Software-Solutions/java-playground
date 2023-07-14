import { Module } from '@nestjs/common';
import { EngineController } from './engine.controller';
import { EngineService } from './engine.service';

@Module({
  controllers: [EngineController],
  providers: [EngineService]
})
export class EngineModule {}
