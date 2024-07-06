import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, AuthService],
})
export class TaskModule {}
