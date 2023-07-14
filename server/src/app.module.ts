import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineModule } from './engine/engine.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EngineModule],
})
export class AppModule {}
