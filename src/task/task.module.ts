import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, AuthService, EmailService],
})
export class TaskModule {}
