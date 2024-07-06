import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly authService: AuthService
  ) {}

  @ApiTags('Create task')
  @ApiOperation({ summary: 'Create a task' })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    const task = await this.taskService.create(createTaskDto);
    
    const eventData = {
      summary: task.title,
      description: task.description,
      start: {
        dateTime: task.start.toISOString(),
      },
      end: {
        dateTime: task.end.toISOString(),
      },
    };

    const responseTask = await this.authService.createEvent(eventData);
    return { msg: "consegui porra", responseTask };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
