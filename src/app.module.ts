import { Module } from '@nestjs/common';
import { AdoptionModule } from './adoption/adoption.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AdoptionModule, PrismaModule, ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule {}
