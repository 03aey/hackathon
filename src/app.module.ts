import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from '../auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './database/prisma.module';
import { HackathonService } from './hackathon/hackathon.service';
import { HackathonController } from './hackathon/hackathon.controller';
import { HackathonModule } from './hackathon/hackathon.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule.forRoot({ auth }),
    PrismaModule,
    UserModule,
    HackathonModule,
  ],
  controllers: [AppController, HackathonController],
  providers: [AppService, HackathonService],
})
export class AppModule {}
