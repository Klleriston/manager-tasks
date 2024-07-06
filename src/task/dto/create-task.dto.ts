import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'My Task',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'This is a task description',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The start date and time of the task',
    example: '2024-07-06T09:00:00.000Z',
  })
  @IsDate()
  @Type(() => Date)
  start: Date;

  @ApiProperty({
    description: 'The end date and time of the task (optional)',
    example: '2024-07-06T10:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  end?: Date;
}
