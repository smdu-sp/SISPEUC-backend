import { Module } from '@nestjs/common';
import { ServidorService } from './servidor.service';
import { ServidorController } from './servidor.controller';

@Module({
  controllers: [ServidorController],
  providers: [ServidorService],
})
export class ServidorModule {}
