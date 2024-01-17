import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServidorModule } from './servidor/servidor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ServidorModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
