import { Injectable } from '@nestjs/common';
import { CompleteTaskDto, TaskDto, UpdateTaskDto } from './tasks.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(
    private readonly httpService: HttpService,
  ) { }

  async findTasks(sortBy: string, orderBy: string) {
    try {
      const response = await firstValueFrom(this.httpService.get(`http://localhost:3002/api/v1/tasks?sortBy=${sortBy}&orderBy=${orderBy}`));
      return response.data;
    } catch (error) {
      console.error('Error while fetching tasks (admin endpoint)', error);
      throw error;
    }
  }
  async findAllByUserID(userID: number) {
    try {
      const response = await firstValueFrom(this.httpService.get(`http://localhost:3002/api/v1/tasks/users/${userID}`));
      return response.data;
    } catch (error) {
      console.error('Error while fetching tasks', error);
      throw error;
    }
  }

  async createTask(taskDto: TaskDto) {
    try {
      const response = await firstValueFrom(this.httpService.post('http://localhost:3002/api/v1/tasks', taskDto));
      return response.data;
    } catch (error) {
      console.error('Error while creating a task', error);
      throw error;
    }
  }

  async updateTask(taskDto: UpdateTaskDto) {
    try {
      const response = await firstValueFrom(this.httpService.put('http://localhost:3002/api/v1/tasks', taskDto));
      return response.data;
    } catch (error) {
      console.error('Error while updating a task', error);
      throw error;
    }
  }

  async completeTask(completeTaskDto: CompleteTaskDto, userID: number) {
    completeTaskDto['userID'] = userID;
    try {
      const response = await firstValueFrom(this.httpService.patch('http://localhost:3002/api/v1/tasks', completeTaskDto));
      return response.data;
    } catch (error) {
      console.error('Error while marking task complete', error);
      throw error;
    }
  }
}
