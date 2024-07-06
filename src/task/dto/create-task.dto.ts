import { Type } from 'class-transformer';
import { IsDate, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'My Task'
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'This is a task description'
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The date the task is due',
    example: '2024-07-06'
  })
  @IsDate()
  @Type(() => Date)
  date: Date;
}
