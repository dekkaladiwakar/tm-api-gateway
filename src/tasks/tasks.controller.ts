import { Body, Controller, Get, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AdminGuard } from 'src/guards/admin.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CompleteTaskDto, TaskDto, UpdateTaskDto } from './tasks.dto';
import {User} from 'src/decorators/user.decorator';

@Controller('tasks')
export class TasksController {
 constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard )
  @Get()
  async findAllByUserID(@User('userID') userID: number) {
    return await this.tasksService.findAllByUserID(userID)
  }

  @UseGuards(JwtAuthGuard, AdminGuard )
  @Get('all')
  async findTasks(@Query('sortBy') sortBy: string, @Query('orderBy') orderBy: string) {
    return await this.tasksService.findTasks(sortBy, orderBy);
  }

  @UseGuards(JwtAuthGuard, AdminGuard )
  @Post()
  async createTask(@Body() taskDto: TaskDto) {
    return await this.tasksService.createTask(taskDto)
  }
  
  @UseGuards(JwtAuthGuard, AdminGuard )
  @Put()
  async updateTask(@Body() updateTaskDto: UpdateTaskDto) {
    return await this.tasksService.updateTask(updateTaskDto)
  }

  @UseGuards(JwtAuthGuard )
  @Patch()
  async completeTask(@Body() completeTaskDto: CompleteTaskDto, @User('userID') userID: number) {
    return await this.tasksService.completeTask(completeTaskDto, userID)
  }
}
