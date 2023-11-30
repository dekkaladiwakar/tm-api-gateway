import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsInt, IsString, IsOptional, IsBoolean, IsDate, Min, Max } from 'class-validator';

export class TaskDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  userID: number;

  @IsInt()
  @Min(1)
  @Max(5)
  priority: number;

  @IsDate()
  @IsOptional()
  dueDate?: Date;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;

  @IsDate()
  @IsOptional()
  completedAt?: Date;
}


export class UpdateTaskDto extends PartialType(TaskDto) {}
export class CompleteTaskDto extends PickType(TaskDto, ['id', 'isCompleted', 'completedAt'] as const) {
}
