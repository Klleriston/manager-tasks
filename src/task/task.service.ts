import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class TaskService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      if (!createTaskDto.end) {
        const startTime = new Date(createTaskDto.start);
        const endTime = new Date(startTime);
        endTime.setHours(startTime.getHours() + 1);
        createTaskDto.end = endTime;
      }

      const task = await this.prismaService.task.create({
        data: createTaskDto,
      });
      await this.emailService.sendMail(
        'SEU EMAIL',
        `A task ${createTaskDto.title} foi adicionada ao seu calendario`,
        `descrição dela\n ${createTaskDto.description}\n Att, SEU NOME`,
      );
      return { msg: `Deu bom `, ...task };
    } catch (error) {
      console.error('ai nao carai ----->', error);
      throw new InternalServerErrorException('Err :p');
    }
  }

  async findAll(page: number) {
    const itensPage = 5;
    const skip = (page - 1) * itensPage;
    try {
      const tasks = await this.prismaService.task.findMany({
        skip: skip,
        take: itensPage,
      });
      return tasks;
    } catch (error) {
      console.error('Err aqui hihihi ----->', error);
      throw new InternalServerErrorException('ERR >:|');
    }
  }

  async findOne(id: number) {
    try {
      const task = await this.prismaService.task.findUnique({ where: { id } });
      if (!task) {
        throw new NotFoundException('Not found lmao');
      }
      return { msg: 'tome', ...task };
    } catch (error) {
      console.error('tem nada aq nao ----->', error);
      throw new NotFoundException('Not found lmao');
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.prismaService.task.update({
        where: { id },
        data: updateTaskDto,
      });
      return { msg: 'Task updated!', ...task };
    } catch (error) {
      console.error('ERRADO ----->', error);
      if (error instanceof NotFoundError) {
        throw new NotFoundException('Task not found');
      }
      throw new InternalServerErrorException('Failed to update task');
    }
  }

  async remove(id: number) {
    try {
      const task = await this.prismaService.task.delete({ where: { id } });
      return { msg: 'deleted', ...task };
    } catch (error) {
      console.error('ihh ERR ----->', error);
      throw new InternalServerErrorException('Not deleted try again');
    }
  }
}
