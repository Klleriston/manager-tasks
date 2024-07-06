import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsDate, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({
        description: 'The updated title of the task',
        example: 'My Updated Task'
      })
      @IsString()
      @Length(4, 20)
      title: string;
    
      @ApiProperty({
        description: 'The updated description of the task',
        example: 'This is a Updated task description'
      })
      @IsString()
      description: string;
    
      @ApiProperty({
        description: 'The updated date the task is due',
        example: '2024-07-06'
      })
      @IsDate()
      @Type(() => Date)
      date: Date;
}
